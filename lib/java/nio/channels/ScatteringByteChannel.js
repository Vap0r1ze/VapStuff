"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScatteringByteChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.ScatteringByteChannel');
    }
    static $isInstance(obj) {
        return obj instanceof ScatteringByteChannel.$javaClass;
    }
}
exports.default = ScatteringByteChannel;
