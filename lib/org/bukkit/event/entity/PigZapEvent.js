"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PigZapEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PigZapEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PigZapEvent.$javaClass;
    }
    constructor(...args) {
        return new PigZapEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PigZapEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PigZapEvent;
