"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectOutput {
    static get $javaClass() {
        return Java.type('java.io.ObjectOutput');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectOutput.$javaClass;
    }
}
exports.default = ObjectOutput;
