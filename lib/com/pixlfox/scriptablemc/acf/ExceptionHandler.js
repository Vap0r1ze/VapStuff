"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExceptionHandler {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.ExceptionHandler');
    }
    static $isInstance(obj) {
        return obj instanceof ExceptionHandler.$javaClass;
    }
}
exports.default = ExceptionHandler;
