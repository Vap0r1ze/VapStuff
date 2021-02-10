"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByteArrayDataOutput {
    static get $javaClass() {
        return Java.type('com.google.common.io.ByteArrayDataOutput');
    }
    static $isInstance(obj) {
        return obj instanceof ByteArrayDataOutput.$javaClass;
    }
}
exports.default = ByteArrayDataOutput;
