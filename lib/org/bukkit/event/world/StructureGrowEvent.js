"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StructureGrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.StructureGrowEvent');
    }
    static $isInstance(obj) {
        return obj instanceof StructureGrowEvent.$javaClass;
    }
    constructor(...args) {
        return new StructureGrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return StructureGrowEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = StructureGrowEvent;
