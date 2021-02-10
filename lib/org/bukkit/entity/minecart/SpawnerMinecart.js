"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpawnerMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.SpawnerMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof SpawnerMinecart.$javaClass;
    }
}
exports.default = SpawnerMinecart;
