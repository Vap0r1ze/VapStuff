"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightningStrikeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.weather.LightningStrikeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof LightningStrikeEvent.$javaClass;
    }
    constructor(...args) {
        return new LightningStrikeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return LightningStrikeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = LightningStrikeEvent;
