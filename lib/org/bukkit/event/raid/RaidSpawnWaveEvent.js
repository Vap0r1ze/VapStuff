"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RaidSpawnWaveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidSpawnWaveEvent');
    }
    static $isInstance(obj) {
        return obj instanceof RaidSpawnWaveEvent.$javaClass;
    }
    constructor(...args) {
        return new RaidSpawnWaveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RaidSpawnWaveEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = RaidSpawnWaveEvent;
