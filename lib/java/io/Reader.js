"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reader {
    static get $javaClass() {
        return Java.type('java.io.Reader');
    }
    static $isInstance(obj) {
        return obj instanceof Reader.$javaClass;
    }
}
exports.default = Reader;
