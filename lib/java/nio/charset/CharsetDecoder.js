"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharsetDecoder {
    static get $javaClass() {
        return Java.type('java.nio.charset.CharsetDecoder');
    }
    static $isInstance(obj) {
        return obj instanceof CharsetDecoder.$javaClass;
    }
}
exports.default = CharsetDecoder;
