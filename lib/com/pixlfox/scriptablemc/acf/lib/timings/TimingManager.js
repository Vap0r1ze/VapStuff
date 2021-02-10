"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimingManager {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.lib.timings.TimingManager');
    }
    static $isInstance(obj) {
        return obj instanceof TimingManager.$javaClass;
    }
    static of(...args) {
        return TimingManager.$javaClass.of(...args);
    }
}
exports.default = TimingManager;
