"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectileHitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ProjectileHitEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ProjectileHitEvent.$javaClass;
    }
    constructor(...args) {
        return new ProjectileHitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ProjectileHitEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ProjectileHitEvent;
