"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrewingStandFuelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.BrewingStandFuelEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BrewingStandFuelEvent.$javaClass;
    }
    constructor(...args) {
        return new BrewingStandFuelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BrewingStandFuelEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BrewingStandFuelEvent;
