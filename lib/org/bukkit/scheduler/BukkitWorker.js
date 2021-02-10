"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitWorker {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitWorker');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitWorker.$javaClass;
    }
}
exports.default = BukkitWorker;
