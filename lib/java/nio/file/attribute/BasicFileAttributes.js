"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicFileAttributes {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.BasicFileAttributes');
    }
    static $isInstance(obj) {
        return obj instanceof BasicFileAttributes.$javaClass;
    }
}
exports.default = BasicFileAttributes;
