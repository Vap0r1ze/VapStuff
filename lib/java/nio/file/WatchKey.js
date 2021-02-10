"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WatchKey {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchKey');
    }
    static $isInstance(obj) {
        return obj instanceof WatchKey.$javaClass;
    }
}
exports.default = WatchKey;
