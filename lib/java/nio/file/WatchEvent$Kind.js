"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WatchEvent$Kind {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchEvent$Kind');
    }
    static $isInstance(obj) {
        return obj instanceof WatchEvent$Kind.$javaClass;
    }
}
exports.default = WatchEvent$Kind;
