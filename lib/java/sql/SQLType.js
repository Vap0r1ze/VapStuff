"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SQLType {
    static get $javaClass() {
        return Java.type('java.sql.SQLType');
    }
    static $isInstance(obj) {
        return obj instanceof SQLType.$javaClass;
    }
}
exports.default = SQLType;
