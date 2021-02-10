"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wrapper {
    static get $javaClass() {
        return Java.type('java.sql.Wrapper');
    }
    static $isInstance(obj) {
        return obj instanceof Wrapper.$javaClass;
    }
}
exports.default = Wrapper;
