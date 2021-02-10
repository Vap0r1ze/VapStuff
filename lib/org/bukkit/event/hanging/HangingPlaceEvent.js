"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HangingPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingPlaceEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HangingPlaceEvent.$javaClass;
    }
    constructor(...args) {
        return new HangingPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HangingPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = HangingPlaceEvent;
