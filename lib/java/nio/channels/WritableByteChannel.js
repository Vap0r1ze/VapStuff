"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WritableByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.WritableByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof WritableByteChannel.$javaClass;
    }
}
exports.default = WritableByteChannel;
