"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WatchEvent$Modifier {
    static get $javaClass() {
        return Java.type('java.nio.file.WatchEvent$Modifier');
    }
    static $isInstance(obj) {
        return obj instanceof WatchEvent$Modifier.$javaClass;
    }
}
exports.default = WatchEvent$Modifier;
