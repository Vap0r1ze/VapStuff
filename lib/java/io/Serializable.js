"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Serializable {
    static get $javaClass() {
        return Java.type('java.io.Serializable');
    }
    static $isInstance(obj) {
        return obj instanceof Serializable.$javaClass;
    }
}
exports.default = Serializable;
