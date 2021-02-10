"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Writer {
    static get $javaClass() {
        return Java.type('java.io.Writer');
    }
    static $isInstance(obj) {
        return obj instanceof Writer.$javaClass;
    }
}
exports.default = Writer;
