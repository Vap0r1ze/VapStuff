"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.ByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof ByteChannel.$javaClass;
    }
}
exports.default = ByteChannel;
