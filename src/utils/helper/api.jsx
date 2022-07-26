import axios from 'axios';

const serverApi = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
});

serverApi.interceptors.request.use(
	req => {
		return Promise.resolve(req);
	},
	err => {
		return Promise.reject(err);
	}
);

serverApi.interceptors.response.use(
	res => {
		return Promise.resolve(res);
	},
	err => {
		return Promise.reject(err);
	}
);
export { serverApi };
