"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectStreamClass {
    static get $javaClass() {
        return Java.type('java.io.ObjectStreamClass');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectStreamClass.$javaClass;
    }
    static get NO_FIELDS() {
        return ObjectStreamClass.$javaClass.NO_FIELDS;
    }
    static lookup(...args) {
        return ObjectStreamClass.$javaClass.lookup(...args);
    }
    static lookupAny(...args) {
        return ObjectStreamClass.$javaClass.lookupAny(...args);
    }
}
exports.default = ObjectStreamClass;
