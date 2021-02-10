"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HopperMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.HopperMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof HopperMinecart.$javaClass;
    }
}
exports.default = HopperMinecart;
