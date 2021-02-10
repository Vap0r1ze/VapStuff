"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VillagerCareerChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.VillagerCareerChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VillagerCareerChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new VillagerCareerChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VillagerCareerChangeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VillagerCareerChangeEvent;
