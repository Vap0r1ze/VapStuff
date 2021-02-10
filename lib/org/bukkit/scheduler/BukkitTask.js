"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitTask {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitTask');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitTask.$javaClass;
    }
}
exports.default = BukkitTask;
