"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NClob {
    static get $javaClass() {
        return Java.type('java.sql.NClob');
    }
    static $isInstance(obj) {
        return obj instanceof NClob.$javaClass;
    }
}
exports.default = NClob;
