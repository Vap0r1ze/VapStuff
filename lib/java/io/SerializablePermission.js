"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SerializablePermission {
    static get $javaClass() {
        return Java.type('java.io.SerializablePermission');
    }
    static $isInstance(obj) {
        return obj instanceof SerializablePermission.$javaClass;
    }
    constructor(...args) {
        return new SerializablePermission.$javaClass(...args);
    }
}
exports.default = SerializablePermission;
