"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Closeable {
    static get $javaClass() {
        return Java.type('java.io.Closeable');
    }
    static $isInstance(obj) {
        return obj instanceof Closeable.$javaClass;
    }
}
exports.default = Closeable;
