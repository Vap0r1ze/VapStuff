"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharBuffer {
    static get $javaClass() {
        return Java.type('java.nio.CharBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof CharBuffer.$javaClass;
    }
    static allocate(...args) {
        return CharBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return CharBuffer.$javaClass.wrap(...args);
    }
}
exports.default = CharBuffer;
