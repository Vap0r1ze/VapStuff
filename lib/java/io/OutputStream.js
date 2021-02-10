"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OutputStream {
    static get $javaClass() {
        return Java.type('java.io.OutputStream');
    }
    static $isInstance(obj) {
        return obj instanceof OutputStream.$javaClass;
    }
    constructor(...args) {
        return new OutputStream.$javaClass(...args);
    }
}
exports.default = OutputStream;
