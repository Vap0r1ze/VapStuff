"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    static get $javaClass() {
        return Java.type('khttp.requests.Request');
    }
    static $isInstance(obj) {
        return obj instanceof Request.$javaClass;
    }
}
exports.default = Request;
