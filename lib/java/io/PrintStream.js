"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrintStream {
    static get $javaClass() {
        return Java.type('java.io.PrintStream');
    }
    static $isInstance(obj) {
        return obj instanceof PrintStream.$javaClass;
    }
    constructor(...args) {
        return new PrintStream.$javaClass(...args);
    }
}
exports.default = PrintStream;
