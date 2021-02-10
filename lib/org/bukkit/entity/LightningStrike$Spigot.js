"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightningStrike$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LightningStrike$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof LightningStrike$Spigot.$javaClass;
    }
    constructor(...args) {
        return new LightningStrike$Spigot.$javaClass(...args);
    }
}
exports.default = LightningStrike$Spigot;
