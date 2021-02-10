"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByteProcessor {
    static get $javaClass() {
        return Java.type('com.google.common.io.ByteProcessor');
    }
    static $isInstance(obj) {
        return obj instanceof ByteProcessor.$javaClass;
    }
}
exports.default = ByteProcessor;
