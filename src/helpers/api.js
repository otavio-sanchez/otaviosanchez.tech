import axios from 'axios';

const url = process.env.REACT_APP_API;


const get = async parameters => axios.get(`${url}${parameters}`, {
	method: 'GET',
	mode: 'no-cors',
	headers: {
		'Access-Control-Expose-Headers': 'X-json',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Request-Method': 'get',
		'Access-Control-Request-Headers': 'X-custom-header',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	withCredentials: false,
	credentials: 'same-origin',
})
	.then(response => response)
	.catch(error => error);


const post = async (parameters, body) => axios.post(`${url}${parameters}`, body)
	.then(response => response.data)
	.catch(error => error);


export default { get, post };
