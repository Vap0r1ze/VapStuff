"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SQLException {
    static get $javaClass() {
        return Java.type('java.sql.SQLException');
    }
    static $isInstance(obj) {
        return obj instanceof SQLException.$javaClass;
    }
    constructor(...args) {
        return new SQLException.$javaClass(...args);
    }
}
exports.default = SQLException;
