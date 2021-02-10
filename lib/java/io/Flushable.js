"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Flushable {
    static get $javaClass() {
        return Java.type('java.io.Flushable');
    }
    static $isInstance(obj) {
        return obj instanceof Flushable.$javaClass;
    }
}
exports.default = Flushable;
