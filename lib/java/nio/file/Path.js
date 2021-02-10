"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Path {
    static get $javaClass() {
        return Java.type('java.nio.file.Path');
    }
    static $isInstance(obj) {
        return obj instanceof Path.$javaClass;
    }
}
exports.default = Path;
