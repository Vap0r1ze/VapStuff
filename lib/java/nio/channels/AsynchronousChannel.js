"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsynchronousChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.AsynchronousChannel');
    }
    static $isInstance(obj) {
        return obj instanceof AsynchronousChannel.$javaClass;
    }
}
exports.default = AsynchronousChannel;
