"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectStreamField {
    static get $javaClass() {
        return Java.type('java.io.ObjectStreamField');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectStreamField.$javaClass;
    }
    constructor(...args) {
        return new ObjectStreamField.$javaClass(...args);
    }
}
exports.default = ObjectStreamField;
