export default class CookieJar {
    static get $javaClass() {
        return Java.type('khttp.structures.cookie.CookieJar');
    }
    constructor(...args) {
        return new CookieJar.$javaClass(...args);
    }
}
