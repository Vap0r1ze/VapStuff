"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileStore {
    static get $javaClass() {
        return Java.type('java.nio.file.FileStore');
    }
    static $isInstance(obj) {
        return obj instanceof FileStore.$javaClass;
    }
}
exports.default = FileStore;
