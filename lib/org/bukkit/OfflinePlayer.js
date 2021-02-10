"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OfflinePlayer {
    static get $javaClass() {
        return Java.type('org.bukkit.OfflinePlayer');
    }
    static $isInstance(obj) {
        return obj instanceof OfflinePlayer.$javaClass;
    }
}
exports.default = OfflinePlayer;
