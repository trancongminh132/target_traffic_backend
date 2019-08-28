/**
 * Exercise 1
 *
 * Please setup a http server listening on port 80. Requesting GET / the following reponse will be returned
 *
 * Content-Type: JSON
 * Body: {
 *      RequesterIP: <IP where the rq originated from>,
 *      RequesterRealIP: <The real IP the rq originates from, in case the RQ was proxied, else null>,
 *      HostExternalIP: The externalIP of the server, identified via https://api.ipify.org/?format=json
 * }
 */

import * as express from 'express'
import * as request from 'request-promise-native'
import * as async from 'async'

export default class Exercise1 {
    constructor() {
        this.run()
    }

    static external_ip: string

    static get port(): number { return 2000 }

    static get address_api(): string { return "https://api.ipify.org/?format=json" }

    public run(): any {
    	return this.start_server()
    }

    public start_server(): void {
    	const server = express()
    	server.get('/', (req, res) => { 
    		res.setHeader('Content-Type', 'application/json');
    		async.waterfall([
    			function(callback: any): void {
    				var options = {
    					uri: Exercise1.address_api,
					}
					request.get(options).then(function(result: string) {
						Exercise1.external_ip = JSON.parse(result).ip
						callback()
					})
    			},
    			function(callback: any) {
    				var data_body = {
		    			"RequesterIP": req.connection.remoteAddress,
		    			"RequesterRealIP" : req.headers['x-forwarded-for'] || null,
		    			"HostExternalIP" : Exercise1.external_ip,
		    		}
    				res.end(JSON.stringify(data_body, null, 3))
    			}
    		]);
    	});
    	server.listen(Exercise1.port, () => { console.log('Listening on port ' + Exercise1.port) })
    }
}
