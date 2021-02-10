"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectileSource {
    static get $javaClass() {
        return Java.type('org.bukkit.projectiles.ProjectileSource');
    }
    static $isInstance(obj) {
        return obj instanceof ProjectileSource.$javaClass;
    }
}
exports.default = ProjectileSource;
