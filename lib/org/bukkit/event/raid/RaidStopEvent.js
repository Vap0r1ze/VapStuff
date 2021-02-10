"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RaidStopEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidStopEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RaidStopEvent.$javaClass;
    }
    constructor(...args) {
        return new RaidStopEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RaidStopEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = RaidStopEvent;
