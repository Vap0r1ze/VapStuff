"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileStoreAttributeView {
    static get $javaClass() {
        return Java.type('java.nio.file.attribute.FileStoreAttributeView');
    }
    static $isInstance(obj) {
        return obj instanceof FileStoreAttributeView.$javaClass;
    }
}
exports.default = FileStoreAttributeView;
