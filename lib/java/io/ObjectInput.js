"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectInput {
    static get $javaClass() {
        return Java.type('java.io.ObjectInput');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectInput.$javaClass;
    }
}
exports.default = ObjectInput;
