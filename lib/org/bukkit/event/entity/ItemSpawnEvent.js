"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemSpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ItemSpawnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ItemSpawnEvent.$javaClass;
    }
    constructor(...args) {
        return new ItemSpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ItemSpawnEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ItemSpawnEvent;
