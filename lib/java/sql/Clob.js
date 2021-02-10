"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clob {
    static get $javaClass() {
        return Java.type('java.sql.Clob');
    }
    static $isInstance(obj) {
        return obj instanceof Clob.$javaClass;
    }
}
exports.default = Clob;
