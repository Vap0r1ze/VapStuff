"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileAttribute {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.FileAttribute');
    }
    static $isInstance(obj) {
        return obj instanceof FileAttribute.$javaClass;
    }
}
exports.default = FileAttribute;
