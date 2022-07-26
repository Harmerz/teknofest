import { serverApi } from '../helper/api';
import message from '../helper/message';

const setTime = async val => {
	try {
		const { status } = await serverApi.get(`/commands/st`);
		if (status === 200) message.success('set-time');
	} catch (err) {
		const { data, status } = err.response;
		message.error({ status, message: data?.error }, 'set-time', val);
	}
};

const release = async val => {
	try {
		const { status } = await serverApi.get(`/commands/release`);
		if (status === 200) message.success('release');
	} catch (err) {
		const { data, status } = err.response;
		message.error({ status, message: data?.error }, 'release', val);
	}
};

const reset = async val => {
	try {
		const { status } = await serverApi.get(`/commands/reset`);
		if (status === 200) message.success('reset');
	} catch (err) {
		const { data, status } = err.response;
		message.error({ status, message: data?.error }, 'reset', val);
	}
};

const download = async val => {
	try {
		const res = await serverApi.get(`/logs/${val}`);
		console.log(res);
		window.open(res.data.file, '_blank');
	} catch (err) {
		const { data, status } = err.response;
		message.error({ status, message: data?.error }, 'download', val);
	}
};

const commandServices = {
	setTime,
	release,
	reset,
	download
};

export default commandServices;
