"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EvokerFangs {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EvokerFangs');
    }
    static $isInstance(obj) {
        return obj instanceof EvokerFangs.$javaClass;
    }
}
exports.default = EvokerFangs;
