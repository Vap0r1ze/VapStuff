"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByteArrayInputStream {
    static get $javaClass() {
        return Java.type('java.io.ByteArrayInputStream');
    }
    static $isInstance(obj) {
        return obj instanceof ByteArrayInputStream.$javaClass;
    }
    constructor(...args) {
        return new ByteArrayInputStream.$javaClass(...args);
    }
}
exports.default = ByteArrayInputStream;
