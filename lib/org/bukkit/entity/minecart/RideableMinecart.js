"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RideableMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.RideableMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof RideableMinecart.$javaClass;
    }
}
exports.default = RideableMinecart;
