"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VillagerAcquireTradeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.VillagerAcquireTradeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VillagerAcquireTradeEvent.$javaClass;
    }
    constructor(...args) {
        return new VillagerAcquireTradeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VillagerAcquireTradeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VillagerAcquireTradeEvent;
