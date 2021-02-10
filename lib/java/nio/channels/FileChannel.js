"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileChannel {
    static get $javaClass() {
        return Java.type('java.nio.channels.FileChannel');
    }
    static $isInstance(obj) {
        return obj instanceof FileChannel.$javaClass;
    }
    static open(...args) {
        return FileChannel.$javaClass.open(...args);
    }
}
exports.default = FileChannel;
