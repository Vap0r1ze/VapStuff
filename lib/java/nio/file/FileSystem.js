"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileSystem {
    static get $javaClass() {
        return Java.type('java.nio.file.FileSystem');
    }
    static $isInstance(obj) {
        return obj instanceof FileSystem.$javaClass;
    }
}
exports.default = FileSystem;
