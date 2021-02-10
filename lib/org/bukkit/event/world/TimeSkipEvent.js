"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeSkipEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.TimeSkipEvent');
    }
    static $isInstance(obj) {
        return obj instanceof TimeSkipEvent.$javaClass;
    }
    constructor(...args) {
        return new TimeSkipEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return TimeSkipEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = TimeSkipEvent;
