"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitScheduler {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitScheduler');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitScheduler.$javaClass;
    }
}
exports.default = BukkitScheduler;
