"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileInputStream {
    static get $javaClass() {
        return Java.type('java.io.FileInputStream');
    }
    static $isInstance(obj) {
        return obj instanceof FileInputStream.$javaClass;
    }
    constructor(...args) {
        return new FileInputStream.$javaClass(...args);
    }
}
exports.default = FileInputStream;
