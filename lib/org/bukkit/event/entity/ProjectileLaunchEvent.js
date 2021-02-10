"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectileLaunchEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ProjectileLaunchEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ProjectileLaunchEvent.$javaClass;
    }
    constructor(...args) {
        return new ProjectileLaunchEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ProjectileLaunchEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ProjectileLaunchEvent;
