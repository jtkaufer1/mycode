import cacheMiddleware from '../../middleware/cache';

export default function handler(req, res) {
  cacheMiddleware(req, res, () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json(data);
      });
  });
}

