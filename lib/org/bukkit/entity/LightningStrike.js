"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightningStrike {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LightningStrike');
    }
    static $isInstance(obj) {
        return obj instanceof LightningStrike.$javaClass;
    }
}
exports.default = LightningStrike;
