"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TradeSelectEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.TradeSelectEvent');
    }
    static $isInstance(obj) {
        return obj instanceof TradeSelectEvent.$javaClass;
    }
    constructor(...args) {
        return new TradeSelectEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return TradeSelectEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = TradeSelectEvent;
