export default class CookieJar {
    static get $javaClass() {
        return Java.type('khttp.structures.cookie.CookieJar');
    }
    static $isInstance(obj) {
        return obj instanceof CookieJar.$javaClass;
    }
    constructor(...args) {
        return new CookieJar.$javaClass(...args);
    }
}
