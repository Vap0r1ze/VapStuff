"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByteArrayDataInput {
    static get $javaClass() {
        return Java.type('com.google.common.io.ByteArrayDataInput');
    }
    static $isInstance(obj) {
        return obj instanceof ByteArrayDataInput.$javaClass;
    }
}
exports.default = ByteArrayDataInput;
