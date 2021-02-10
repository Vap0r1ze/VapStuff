"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PotionBrewer {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionBrewer');
    }
    static $isInstance(obj) {
        return obj instanceof PotionBrewer.$javaClass;
    }
}
exports.default = PotionBrewer;
