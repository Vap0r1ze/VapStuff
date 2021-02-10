"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessMode {
    static get $javaClass() {
        return Java.type('java.nio.file.AccessMode');
    }
    static $isInstance(obj) {
        return obj instanceof AccessMode.$javaClass;
    }
    static get EXECUTE() {
        return this.$javaClass.EXECUTE;
    }
    static get READ() {
        return this.$javaClass.READ;
    }
    static get WRITE() {
        return this.$javaClass.WRITE;
    }
}
exports.default = AccessMode;
