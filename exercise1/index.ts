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
export default class Exercise1 {
    constructor() {
        this.run();
    }

    public run(): void {}
}
