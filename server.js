/*!
 * TEST SERVER
 **/


const
	koa = require('koa'),
	serve = require('koa-static'),
	port = 7501,
	oneYear = 1000 * 60 * 60 * 24 * 365,
	config = require('./config'),
	app = koa(),
	Jade = require('koa-pug'),
	isProduction = false,
	cwd = process.cwd()

//static files
app.use(function*(next) {
	this.set('Access-Control-Allow-Origin', '*')
	yield next
})

app.use(serve(__dirname, {
	maxAge: oneYear
}))

//pug template
const pug = new Jade({
	viewPath: cwd + '/views',
	debug: !isProduction,
	pretty: !isProduction,
	compileDebug: !isProduction,
	helperPath: [{
		_: require('lodash')
	}],
	noCache: true,
	app: app // equals to pug.use(app) and app.use(pug.middleware)
})

//start
app.listen(port, function() {
	console.log(new Date() + ' ' + config.siteName + ' runs on port ' + port)
})