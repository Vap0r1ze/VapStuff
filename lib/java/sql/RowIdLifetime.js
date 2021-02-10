"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RowIdLifetime {
    static get $javaClass() {
        return Java.type('java.sql.RowIdLifetime');
    }
    static $isInstance(obj) {
        return obj instanceof RowIdLifetime.$javaClass;
    }
    static get ROWID_UNSUPPORTED() {
        return this.$javaClass.ROWID_UNSUPPORTED;
    }
    static get ROWID_VALID_FOREVER() {
        return this.$javaClass.ROWID_VALID_FOREVER;
    }
    static get ROWID_VALID_OTHER() {
        return this.$javaClass.ROWID_VALID_OTHER;
    }
    static get ROWID_VALID_SESSION() {
        return this.$javaClass.ROWID_VALID_SESSION;
    }
    static get ROWID_VALID_TRANSACTION() {
        return this.$javaClass.ROWID_VALID_TRANSACTION;
    }
}
exports.default = RowIdLifetime;
