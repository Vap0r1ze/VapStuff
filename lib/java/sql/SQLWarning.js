"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SQLWarning {
    static get $javaClass() {
        return Java.type('java.sql.SQLWarning');
    }
    static $isInstance(obj) {
        return obj instanceof SQLWarning.$javaClass;
    }
    constructor(...args) {
        return new SQLWarning.$javaClass(...args);
    }
}
exports.default = SQLWarning;
