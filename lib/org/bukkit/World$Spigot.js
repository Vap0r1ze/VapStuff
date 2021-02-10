"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class World$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.World$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof World$Spigot.$javaClass;
    }
    constructor(...args) {
        return new World$Spigot.$javaClass(...args);
    }
}
exports.default = World$Spigot;
