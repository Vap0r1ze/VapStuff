"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpEntry {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.HelpEntry');
    }
    static $isInstance(obj) {
        return obj instanceof HelpEntry.$javaClass;
    }
}
exports.default = HelpEntry;
