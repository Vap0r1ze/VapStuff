"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Dispenser');
    }
    static $isInstance(obj) {
        return obj instanceof Dispenser.$javaClass;
    }
}
exports.default = Dispenser;
