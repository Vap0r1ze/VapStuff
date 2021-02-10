"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataOutput {
    static get $javaClass() {
        return Java.type('java.io.DataOutput');
    }
    static $isInstance(obj) {
        return obj instanceof DataOutput.$javaClass;
    }
}
exports.default = DataOutput;
