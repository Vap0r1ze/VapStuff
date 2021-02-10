"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PotionSplashEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PotionSplashEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PotionSplashEvent.$javaClass;
    }
    constructor(...args) {
        return new PotionSplashEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PotionSplashEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PotionSplashEvent;
