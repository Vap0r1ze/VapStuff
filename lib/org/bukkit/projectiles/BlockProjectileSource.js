"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockProjectileSource {
    static get $javaClass() {
        return Java.type('org.bukkit.projectiles.BlockProjectileSource');
    }
    static $isInstance(obj) {
        return obj instanceof BlockProjectileSource.$javaClass;
    }
}
exports.default = BlockProjectileSource;
