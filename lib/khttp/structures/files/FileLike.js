"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileLike {
    static get $javaClass() {
        return Java.type('khttp.structures.files.FileLike');
    }
    static $isInstance(obj) {
        return obj instanceof FileLike.$javaClass;
    }
    constructor(...args) {
        return new FileLike.$javaClass(...args);
    }
}
exports.default = FileLike;
