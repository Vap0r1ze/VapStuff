"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreeperPowerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.CreeperPowerEvent');
    }
    static $isInstance(obj) {
        return obj instanceof CreeperPowerEvent.$javaClass;
    }
    constructor(...args) {
        return new CreeperPowerEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CreeperPowerEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = CreeperPowerEvent;
