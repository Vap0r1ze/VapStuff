"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Watchable {
    static get $javaClass() {
        return Java.type('java.nio.file.Watchable');
    }
    static $isInstance(obj) {
        return obj instanceof Watchable.$javaClass;
    }
}
exports.default = Watchable;
