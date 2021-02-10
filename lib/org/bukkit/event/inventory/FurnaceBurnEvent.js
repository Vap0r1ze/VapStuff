"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FurnaceBurnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.FurnaceBurnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof FurnaceBurnEvent.$javaClass;
    }
    constructor(...args) {
        return new FurnaceBurnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FurnaceBurnEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = FurnaceBurnEvent;
