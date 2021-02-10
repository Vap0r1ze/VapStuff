"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RowId {
    static get $javaClass() {
        return Java.type('java.sql.RowId');
    }
    static $isInstance(obj) {
        return obj instanceof RowId.$javaClass;
    }
}
exports.default = RowId;
