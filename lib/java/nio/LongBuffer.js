"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LongBuffer {
    static get $javaClass() {
        return Java.type('java.nio.LongBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof LongBuffer.$javaClass;
    }
    static allocate(...args) {
        return LongBuffer.$javaClass.allocate(...args);
    }
    static wrap(...args) {
        return LongBuffer.$javaClass.wrap(...args);
    }
}
exports.default = LongBuffer;
