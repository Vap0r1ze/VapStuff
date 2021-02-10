"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RaidEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RaidEvent.$javaClass;
    }
}
exports.default = RaidEvent;
