"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BossBar {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.BossBar');
    }
    static $isInstance(obj) {
        return obj instanceof BossBar.$javaClass;
    }
}
exports.default = BossBar;
