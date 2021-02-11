"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrepareItemCraftEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.PrepareItemCraftEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PrepareItemCraftEvent.$javaClass;
    }
    constructor(...args) {
        return new PrepareItemCraftEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PrepareItemCraftEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PrepareItemCraftEvent;