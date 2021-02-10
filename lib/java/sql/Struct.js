"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Struct {
    static get $javaClass() {
        return Java.type('java.sql.Struct');
    }
    static $isInstance(obj) {
        return obj instanceof Struct.$javaClass;
    }
}
exports.default = Struct;
