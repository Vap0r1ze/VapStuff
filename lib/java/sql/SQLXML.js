"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SQLXML {
    static get $javaClass() {
        return Java.type('java.sql.SQLXML');
    }
    static $isInstance(obj) {
        return obj instanceof SQLXML.$javaClass;
    }
}
exports.default = SQLXML;
