"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThrownExpBottle {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ThrownExpBottle');
    }
    static $isInstance(obj) {
        return obj instanceof ThrownExpBottle.$javaClass;
    }
}
exports.default = ThrownExpBottle;
