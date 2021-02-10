"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stairs {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Stairs');
    }
    static $isInstance(obj) {
        return obj instanceof Stairs.$javaClass;
    }
}
exports.default = Stairs;
