"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CodingErrorAction {
    static get $javaClass() {
        return Java.type('java.nio.charset.CodingErrorAction');
    }
    static $isInstance(obj) {
        return obj instanceof CodingErrorAction.$javaClass;
    }
    static get IGNORE() {
        return CodingErrorAction.$javaClass.IGNORE;
    }
    static get REPLACE() {
        return CodingErrorAction.$javaClass.REPLACE;
    }
    static get REPORT() {
        return CodingErrorAction.$javaClass.REPORT;
    }
}
exports.default = CodingErrorAction;
