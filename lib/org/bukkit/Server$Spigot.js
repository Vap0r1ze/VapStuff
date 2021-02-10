"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.Server$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof Server$Spigot.$javaClass;
    }
    constructor(...args) {
        return new Server$Spigot.$javaClass(...args);
    }
}
exports.default = Server$Spigot;
