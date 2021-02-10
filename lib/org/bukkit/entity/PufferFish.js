"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PufferFish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.PufferFish');
    }
    static $isInstance(obj) {
        return obj instanceof PufferFish.$javaClass;
    }
}
exports.default = PufferFish;
