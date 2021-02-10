"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SeekableByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.SeekableByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof SeekableByteChannel.$javaClass;
    }
}
exports.default = SeekableByteChannel;
