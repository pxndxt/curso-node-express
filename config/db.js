const mongoose = require('mongoose');

const DB_URI = `mongodb+srv://hebert:hebert@cluster0.kj6gc.mongodb.net/my_app_node?retryWrites=true&w=majority`;

module.exports = () => {
	const connect = () => {
		mongoose.connect(
			DB_URI,
			{
				keepAlive: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err) => {
				if (err) {
					console.log('DB: ERROR !!');
				} else {
					console.log('Conexion correcta!!');
				}
			}
		);
	};

	connect();
};
