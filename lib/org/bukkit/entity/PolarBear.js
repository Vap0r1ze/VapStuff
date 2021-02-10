"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PolarBear {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.PolarBear');
    }
    static $isInstance(obj) {
        return obj instanceof PolarBear.$javaClass;
    }
}
exports.default = PolarBear;
