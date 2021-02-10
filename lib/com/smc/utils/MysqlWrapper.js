"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MysqlWrapper {
    static get $javaClass() {
        return Java.type('com.smc.utils.MysqlWrapper');
    }
    static $isInstance(obj) {
        return obj instanceof MysqlWrapper.$javaClass;
    }
    constructor(...args) {
        return new MysqlWrapper.$javaClass(...args);
    }
    static openConnectionAsync$default(...args) {
        return MysqlWrapper.$javaClass.openConnectionAsync$default(...args);
    }
}
exports.default = MysqlWrapper;
