"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Buffer {
    static get $javaClass() {
        return Java.type('java.nio.Buffer');
    }
    static $isInstance(obj) {
        return obj instanceof Buffer.$javaClass;
    }
}
exports.default = Buffer;
