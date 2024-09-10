const cache = new Map();

export default function cacheMiddleware(req, res, next) {
  const { url } = req;

  if (cache.has(url)) {
    console.log(`Serving from cache: ${url}`);
    res.setHeader('X-Cache', 'HIT');
    res.end(cache.get(url));
    return;
  }

  const originalEnd = res.end;

  res.end = (content) => {
    cache.set(url, content);
    res.setHeader('X-Cache', 'MISS');
    originalEnd.call(res, content);
  };

  next();
}

