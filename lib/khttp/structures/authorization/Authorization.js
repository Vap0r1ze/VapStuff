"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Authorization {
    static get $javaClass() {
        return Java.type('khttp.structures.authorization.Authorization');
    }
    static $isInstance(obj) {
        return obj instanceof Authorization.$javaClass;
    }
}
exports.default = Authorization;
