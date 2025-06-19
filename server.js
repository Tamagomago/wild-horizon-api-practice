import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { handleFilterByField, setRes } from './utils.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
	if (req.url === '/api' && req.method === 'GET') {
		setRes(res, 200, JSON.stringify(await getDataFromDB()));
	} else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
		const continent = req.url.split('/').pop();
		setRes(
			res,
			200,
			JSON.stringify(
				await handleFilterByField(
					await getDataFromDB(),
					'continent',
					continent
				)
			)
		);
	} else if (req.url.startsWith('/api/country') && req.method === 'GET') {
		const country = req.url.split('/').pop();
		setRes(
			res,
			200,
			JSON.stringify(
				await handleFilterByField(
					await getDataFromDB(),
					'country',
					country
				)
			)
		);
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
