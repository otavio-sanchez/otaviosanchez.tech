
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

require('dotenv').load();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/projects', async (req, res) => {
	const API = 'https://pn64fjtid1.execute-api.us-east-2.amazonaws.com/default/send-modules';
	const { data } = await axios.get(API);


	res.json(JSON.parse(data.body));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(80, () => {
	console.log('Server running at port 80');
});
