"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExplosionPrimeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ExplosionPrimeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ExplosionPrimeEvent.$javaClass;
    }
    constructor(...args) {
        return new ExplosionPrimeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ExplosionPrimeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ExplosionPrimeEvent;
