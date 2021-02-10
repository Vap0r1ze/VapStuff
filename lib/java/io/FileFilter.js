"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileFilter {
    static get $javaClass() {
        return Java.type('java.io.FileFilter');
    }
    static $isInstance(obj) {
        return obj instanceof FileFilter.$javaClass;
    }
}
exports.default = FileFilter;
