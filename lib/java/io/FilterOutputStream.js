"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FilterOutputStream {
    static get $javaClass() {
        return Java.type('java.io.FilterOutputStream');
    }
    static $isInstance(obj) {
        return obj instanceof FilterOutputStream.$javaClass;
    }
    constructor(...args) {
        return new FilterOutputStream.$javaClass(...args);
    }
}
exports.default = FilterOutputStream;
