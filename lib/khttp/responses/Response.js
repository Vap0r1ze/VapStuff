"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    static get $javaClass() {
        return Java.type('khttp.responses.Response');
    }
    static $isInstance(obj) {
        return obj instanceof Response.$javaClass;
    }
}
exports.default = Response;
