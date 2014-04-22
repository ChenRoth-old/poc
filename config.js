module.exports = {
	User: require('./logic/user'),
	Email: require('./logic/email'),
	Logger: require('./logic/logger'),
	signup: require('./workflows/signup'),
	daUser:	require('./da/User'),
	db: require('./models/db')
}