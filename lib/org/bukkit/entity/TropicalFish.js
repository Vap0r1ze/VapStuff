"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TropicalFish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TropicalFish');
    }
    static $isInstance(obj) {
        return obj instanceof TropicalFish.$javaClass;
    }
}
exports.default = TropicalFish;
