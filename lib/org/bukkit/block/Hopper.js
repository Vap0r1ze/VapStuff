"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hopper {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Hopper');
    }
    static $isInstance(obj) {
        return obj instanceof Hopper.$javaClass;
    }
}
exports.default = Hopper;
