"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SheepDyeWoolEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.SheepDyeWoolEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SheepDyeWoolEvent.$javaClass;
    }
    constructor(...args) {
        return new SheepDyeWoolEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SheepDyeWoolEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = SheepDyeWoolEvent;
