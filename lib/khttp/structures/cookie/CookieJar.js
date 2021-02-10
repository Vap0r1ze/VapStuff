"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieJar {
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
exports.default = CookieJar;
