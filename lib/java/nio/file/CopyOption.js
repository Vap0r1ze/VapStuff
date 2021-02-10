"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CopyOption {
    static get $javaClass() {
        return Java.type('java.nio.file.CopyOption');
    }
    static $isInstance(obj) {
        return obj instanceof CopyOption.$javaClass;
    }
}
exports.default = CopyOption;
