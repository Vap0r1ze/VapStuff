"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _Array {
    static get $javaClass() {
        return Java.type('java.sql.Array');
    }
    static $isInstance(obj) {
        return obj instanceof _Array.$javaClass;
    }
}
exports.default = _Array;
