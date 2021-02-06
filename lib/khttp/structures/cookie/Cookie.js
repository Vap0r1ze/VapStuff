export default class Cookie {
    static get $javaClass() {
        return Java.type('khttp.structures.cookie.Cookie');
    }
    static $isInstance(obj) {
        return obj instanceof Cookie.$javaClass;
    }
    constructor(...args) {
        return new Cookie.$javaClass(...args);
    }
    static copy$default(...args) {
        return Cookie.$javaClass.copy$default(...args);
    }
}
