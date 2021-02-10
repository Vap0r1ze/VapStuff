"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrintWriter {
    static get $javaClass() {
        return Java.type('java.io.PrintWriter');
    }
    static $isInstance(obj) {
        return obj instanceof PrintWriter.$javaClass;
    }
    constructor(...args) {
        return new PrintWriter.$javaClass(...args);
    }
}
exports.default = PrintWriter;
