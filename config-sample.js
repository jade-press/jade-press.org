
//start init
exports.init = {

	//root user email, will be saved to database
	email: 'zxdong@gmail.com'

	//root user password, will be saved to database
	//and you will be forced change password when first time login
	,password: '123456a'

}
//end init

//local setting
exports.local = {

	port: 7400

	,env: 'dev' //or 'production'

	//sitename, you should edit it
	,siteName: 'jadepress.org'

	//site desc, you should edit it
	,siteDesc: 'jade-press is a cms based on mongodb, nodejs...'

	//site keywords, you should edit it
	,siteKeywords: 'jade-press,nodejs,mongodb'

	/* only if you use cdn
	,cdn: 'http://mycdn.com'
	*/

}

//common setting
exports.setting = {

	mongoStoreOptions: {

		//mongo session store url, 
		//visit  https://docs.mongodb.org/manual/reference/connection-string/ for more info
		url: 'mongodb://127.0.0.1:27017/sessions_jpo'

	}

	//secret used to code session and password
	//change it
	,secret: 'szdd345fef3dsdsgfer23dv1e'

	//mongodb url, 
	//visit https://docs.mongodb.org/manual/reference/connection-string/ for more info

	,dbLink: 'mongodb://127.0.0.1:27017/jadepress_org'

	//theme
	//can also be a object like:
	//
	
	,theme: {
		path: __dirname
		,name: 'jade-press-org'
		,version: require('./package.json').version
	}
	

	//,theme: 'jadepress-theme-pi'

	//plugins, format just like dependencies in package.json
	//make sure your theme is in plugins too
	//plugins will be installed by run "gulp install"
	,plugins: {

	}

	//use public cdn or not
	,usePublicCdn: false

	//route setting
	,publicRoute: {
		home: '/'
		,cat: '/cat/:slug'
		,post: '/:catSlug/:slug'
	}

	//access log switch
	,logOn: true

	// mail server config
	// when mail server exist, jadepress can send mail to users to do reset password etc.
	// to know more how to config, vsit http://nodemailer.com/
	// or https://github.com/nodemailer/nodemailer-wellknown#supported-services
	/*
	,mailSender: {
		name: 'xxxx'
		,address: 'xxx@xxxx'
	}
	,mailServer: {
		service: 'xxxx'
		,auth: {
			user: 'service@xxxx.xxxx'
			,pass: 'xxxxxxx'
		}
	}
	*/
	
}