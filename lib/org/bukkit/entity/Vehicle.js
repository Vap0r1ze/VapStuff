"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Vehicle');
    }
    static $isInstance(obj) {
        return obj instanceof Vehicle.$javaClass;
    }
}
exports.default = Vehicle;
