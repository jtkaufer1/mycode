const cache = new Map();

async function fetchNewData() {
  const randomId = Math.floor(Math.random() * 100) + 1; // Random ID between 1 and 100
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
  return await response.json();
}

export default async function handler(req, res) {
  const { url } = req;

  if (cache.has(url)) {
    const { data, timestamp } = cache.get(url);

    // Serve stale content if it's older than 10 seconds
    if (Date.now() - timestamp < 10000) {
      console.log(`Serving stale content: ${url}`);
      res.setHeader('X-Cache', 'STALE');
      res.status(200).json(data);
    } else {
      const newData = await fetchNewData();
      cache.set(url, { data: newData, timestamp: Date.now() });
      res.setHeader('X-Cache', 'REVALIDATE');
      res.status(200).json(newData);
    }
  } else {
    const data = await fetchNewData();
    cache.set(url, { data, timestamp: Date.now() });
    res.setHeader('X-Cache', 'MISS');
    res.status(200).json(data);
  }
}

