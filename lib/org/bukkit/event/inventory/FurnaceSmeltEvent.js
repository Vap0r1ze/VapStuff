"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FurnaceSmeltEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.FurnaceSmeltEvent');
    }
    static $isInstance(obj) {
        return obj instanceof FurnaceSmeltEvent.$javaClass;
    }
    constructor(...args) {
        return new FurnaceSmeltEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FurnaceSmeltEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = FurnaceSmeltEvent;
