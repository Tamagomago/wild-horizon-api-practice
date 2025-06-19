import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { getDataByQueryParams, handleFilterByField, setRes } from './utils.js';

const PORT = 8001;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  if (urlObj.pathname === '/api' && req.method === 'GET') {

    console.log('from /api');
    console.log(queryObj);
    if (Object.keys(queryObj).length === 0) {
      setRes(res, 200, JSON.stringify(destinations));
      return;
    }

    const filteredDestinations = getDataByQueryParams(destinations, queryObj);
    setRes(res, 200, JSON.stringify(filteredDestinations));
  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {

    const continent = req.url.split('/').pop();
    setRes(res, 200, JSON.stringify(handleFilterByField(destinations, 'continent', continent)));
  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {

    const country = req.url.split('/').pop();
    setRes(res, 200, JSON.stringify(handleFilterByField(destinations, 'country', country)));
  } else {

    setRes(
      res,
      404,
      JSON.stringify({
        error: 'Not Found',
        message: 'The requested URL does not exist',
      })
    );
  }
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
