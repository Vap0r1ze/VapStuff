"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharsetEncoder {
    static get $javaClass() {
        return Java.type('java.nio.charset.CharsetEncoder');
    }
    static $isInstance(obj) {
        return obj instanceof CharsetEncoder.$javaClass;
    }
}
exports.default = CharsetEncoder;
