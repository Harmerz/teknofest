import { message } from 'antd';

const success = (name, state) => {
	message.success(`Command ${state ? name + '-' + state : name} sent`);
};

const error = (err, name, state) => {
	message.error(
		`Failed to send command ${state ? name + '-' + state : name} ${
			err.status ? '(' + err.status + '-' + err.message + ')' : ''
		}`
	);
};

const messageHelper = {
	success,
	error
};

export default messageHelper;
