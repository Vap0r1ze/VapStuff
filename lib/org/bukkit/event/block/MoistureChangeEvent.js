"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoistureChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.MoistureChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof MoistureChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new MoistureChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return MoistureChangeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = MoistureChangeEvent;
