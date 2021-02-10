"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Savepoint {
    static get $javaClass() {
        return Java.type('java.sql.Savepoint');
    }
    static $isInstance(obj) {
        return obj instanceof Savepoint.$javaClass;
    }
}
exports.default = Savepoint;
