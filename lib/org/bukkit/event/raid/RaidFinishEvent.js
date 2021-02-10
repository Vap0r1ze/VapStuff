"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RaidFinishEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidFinishEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RaidFinishEvent.$javaClass;
    }
    constructor(...args) {
        return new RaidFinishEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RaidFinishEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = RaidFinishEvent;
