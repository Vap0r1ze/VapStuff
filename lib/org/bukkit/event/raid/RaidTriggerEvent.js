"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RaidTriggerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidTriggerEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RaidTriggerEvent.$javaClass;
    }
    constructor(...args) {
        return new RaidTriggerEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RaidTriggerEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = RaidTriggerEvent;