"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByteArrayOutputStream {
    static get $javaClass() {
        return Java.type('java.io.ByteArrayOutputStream');
    }
    static $isInstance(obj) {
        return obj instanceof ByteArrayOutputStream.$javaClass;
    }
    constructor(...args) {
        return new ByteArrayOutputStream.$javaClass(...args);
    }
}
exports.default = ByteArrayOutputStream;
