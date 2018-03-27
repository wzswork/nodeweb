module.exports = {
	port: 8001,
	url: 'mongodb://119.23.202.132:27017/blog',
	session: {
		name: 'wzsblog',
		secret: 'wzsblog',
		cookie: {
			httpOnly: true,
		    secure:   false,
		    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}