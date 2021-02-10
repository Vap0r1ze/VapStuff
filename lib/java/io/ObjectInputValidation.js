"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectInputValidation {
    static get $javaClass() {
        return Java.type('java.io.ObjectInputValidation');
    }
    static $isInstance(obj) {
        return obj instanceof ObjectInputValidation.$javaClass;
    }
}
exports.default = ObjectInputValidation;
