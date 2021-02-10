"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PressureSensor {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PressureSensor');
    }
    static $isInstance(obj) {
        return obj instanceof PressureSensor.$javaClass;
    }
}
exports.default = PressureSensor;
