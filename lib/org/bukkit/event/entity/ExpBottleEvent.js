"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpBottleEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ExpBottleEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ExpBottleEvent.$javaClass;
    }
    constructor(...args) {
        return new ExpBottleEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ExpBottleEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ExpBottleEvent;
