"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HangingBreakEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingBreakEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HangingBreakEvent.$javaClass;
    }
    constructor(...args) {
        return new HangingBreakEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HangingBreakEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = HangingBreakEvent;
