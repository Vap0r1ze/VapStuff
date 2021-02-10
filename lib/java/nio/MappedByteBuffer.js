"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MappedByteBuffer {
    static get $javaClass() {
        return Java.type('java.nio.MappedByteBuffer');
    }
    static $isInstance(obj) {
        return obj instanceof MappedByteBuffer.$javaClass;
    }
    static allocate(...args) {
        return MappedByteBuffer.$javaClass.allocate(...args);
    }
    static allocateDirect(...args) {
        return MappedByteBuffer.$javaClass.allocateDirect(...args);
    }
    static wrap(...args) {
        return MappedByteBuffer.$javaClass.wrap(...args);
    }
}
exports.default = MappedByteBuffer;
