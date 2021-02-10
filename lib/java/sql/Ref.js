"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ref {
    static get $javaClass() {
        return Java.type('java.sql.Ref');
    }
    static $isInstance(obj) {
        return obj instanceof Ref.$javaClass;
    }
}
exports.default = Ref;
