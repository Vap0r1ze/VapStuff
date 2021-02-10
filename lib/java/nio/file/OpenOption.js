"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpenOption {
    static get $javaClass() {
        return Java.type('java.nio.file.OpenOption');
    }
    static $isInstance(obj) {
        return obj instanceof OpenOption.$javaClass;
    }
}
exports.default = OpenOption;
