"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileDescriptor {
    static get $javaClass() {
        return Java.type('java.io.FileDescriptor');
    }
    static $isInstance(obj) {
        return obj instanceof FileDescriptor.$javaClass;
    }
    constructor(...args) {
        return new FileDescriptor.$javaClass(...args);
    }
    static get err() {
        return FileDescriptor.$javaClass.err;
    }
    static get _in() {
        return FileDescriptor.$javaClass.in;
    }
    static get out() {
        return FileDescriptor.$javaClass.out;
    }
}
exports.default = FileDescriptor;
