"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmartInventory {
    static get $javaClass() {
        return Java.type('com.smc.smartinvs.SmartInventory');
    }
    static $isInstance(obj) {
        return obj instanceof SmartInventory.$javaClass;
    }
    constructor(...args) {
        return new SmartInventory.$javaClass(...args);
    }
    static builder(...args) {
        return SmartInventory.$javaClass.builder(...args);
    }
    static clickableItem(...args) {
        return SmartInventory.$javaClass.clickableItem(...args);
    }
    static provider(...args) {
        return SmartInventory.$javaClass.provider(...args);
    }
}
exports.default = SmartInventory;
