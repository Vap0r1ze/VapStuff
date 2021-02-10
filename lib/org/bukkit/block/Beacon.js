"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beacon {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Beacon');
    }
    static $isInstance(obj) {
        return obj instanceof Beacon.$javaClass;
    }
}
exports.default = Beacon;
