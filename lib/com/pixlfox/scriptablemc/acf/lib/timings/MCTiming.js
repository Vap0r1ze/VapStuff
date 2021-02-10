"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MCTiming {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.lib.timings.MCTiming');
    }
    static $isInstance(obj) {
        return obj instanceof MCTiming.$javaClass;
    }
    constructor(...args) {
        return new MCTiming.$javaClass(...args);
    }
}
exports.default = MCTiming;
