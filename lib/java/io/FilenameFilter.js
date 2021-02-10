"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilenameFilter {
    static get $javaClass() {
        return Java.type('java.io.FilenameFilter');
    }
    static $isInstance(obj) {
        return obj instanceof FilenameFilter.$javaClass;
    }
}
exports.default = FilenameFilter;
