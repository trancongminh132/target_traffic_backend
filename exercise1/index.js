"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const request = require("request-promise-native");
const async = require("async");
class Exercise1 {
    constructor() {
        this.run();
    }
    static get port() { return 2000; }
    static get address_api() { return "https://api.ipify.org/?format=json"; }
    run() {
        return this.start_server();
    }
    start_server() {
        const server = express();
        server.get('/', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            async.waterfall([
                function (callback) {
                    var options = {
                        uri: Exercise1.address_api,
                    };
                    request.get(options).then(function (result) {
                        Exercise1.external_ip = JSON.parse(result).ip;
                        callback();
                    });
                },
                function (callback) {
                    var data_body = {
                        "RequesterIP": req.connection.remoteAddress,
                        "RequesterRealIP": req.headers['x-forwarded-for'] || null,
                        "HostExternalIP": Exercise1.external_ip,
                    };
                    res.end(JSON.stringify(data_body, null, 3));
                }
            ]);
        });
        server.listen(Exercise1.port, () => { console.log('Listening on port ' + Exercise1.port); });
    }
}
exports.default = Exercise1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7O0FBRUgsbUNBQWtDO0FBQ2xDLGtEQUFpRDtBQUNqRCwrQkFBOEI7QUFFOUIsTUFBcUIsU0FBUztJQUMxQjtRQUNJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFJRCxNQUFNLEtBQUssSUFBSSxLQUFhLE9BQU8sSUFBSSxDQUFBLENBQUMsQ0FBQztJQUV6QyxNQUFNLEtBQUssV0FBVyxLQUFhLE9BQU8sb0NBQW9DLENBQUEsQ0FBQyxDQUFDO0lBRXpFLEdBQUc7UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU0sWUFBWTtRQUNsQixNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsQ0FBQTtRQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM1QixHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQ2YsVUFBUyxRQUFhO29CQUNyQixJQUFJLE9BQU8sR0FBRzt3QkFDYixHQUFHLEVBQUUsU0FBUyxDQUFDLFdBQVc7cUJBQzdCLENBQUE7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFjO3dCQUNoRCxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFBO3dCQUM3QyxRQUFRLEVBQUUsQ0FBQTtvQkFDWCxDQUFDLENBQUMsQ0FBQTtnQkFDQSxDQUFDO2dCQUNELFVBQVMsUUFBYTtvQkFDckIsSUFBSSxTQUFTLEdBQUc7d0JBQ2YsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYTt3QkFDM0MsaUJBQWlCLEVBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUk7d0JBQzFELGdCQUFnQixFQUFHLFNBQVMsQ0FBQyxXQUFXO3FCQUN4QyxDQUFBO29CQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVDLENBQUM7YUFDRCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVGLENBQUM7Q0FDSjtBQXpDRCw0QkF5Q0MifQ==