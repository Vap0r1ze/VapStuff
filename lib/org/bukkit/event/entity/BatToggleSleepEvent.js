"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BatToggleSleepEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.BatToggleSleepEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BatToggleSleepEvent.$javaClass;
    }
    constructor(...args) {
        return new BatToggleSleepEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BatToggleSleepEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BatToggleSleepEvent;
