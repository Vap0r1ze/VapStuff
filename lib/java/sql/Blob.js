"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blob {
    static get $javaClass() {
        return Java.type('java.sql.Blob');
    }
    static $isInstance(obj) {
        return obj instanceof Blob.$javaClass;
    }
}
exports.default = Blob;
