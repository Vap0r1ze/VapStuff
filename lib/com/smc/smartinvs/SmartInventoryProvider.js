"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartInventoryProvider {
    static get $javaClass() {
        return Java.type('com.smc.smartinvs.SmartInventoryProvider');
    }
    static $isInstance(obj) {
        return obj instanceof SmartInventoryProvider.$javaClass;
    }
    constructor(...args) {
        return new SmartInventoryProvider.$javaClass(...args);
    }
}
exports.default = SmartInventoryProvider;
