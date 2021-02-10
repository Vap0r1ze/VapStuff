"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HorseJumpEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.HorseJumpEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HorseJumpEvent.$javaClass;
    }
    constructor(...args) {
        return new HorseJumpEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HorseJumpEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = HorseJumpEvent;
