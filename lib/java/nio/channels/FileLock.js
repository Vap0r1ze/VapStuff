"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileLock {
    static get $javaClass() {
        return Java.type('java.nio.channels.FileLock');
    }
    static $isInstance(obj) {
        return obj instanceof FileLock.$javaClass;
    }
}
exports.default = FileLock;
