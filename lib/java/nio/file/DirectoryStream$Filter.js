"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DirectoryStream$Filter {
    static get $javaClass() {
        return Java.type('java.nio.file.DirectoryStream$Filter');
    }
    static $isInstance(obj) {
        return obj instanceof DirectoryStream$Filter.$javaClass;
    }
}
exports.default = DirectoryStream$Filter;
