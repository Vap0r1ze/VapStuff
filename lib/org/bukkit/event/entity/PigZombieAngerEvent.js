"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PigZombieAngerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PigZombieAngerEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PigZombieAngerEvent.$javaClass;
    }
    constructor(...args) {
        return new PigZombieAngerEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PigZombieAngerEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PigZombieAngerEvent;
