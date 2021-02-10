"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PistonHead {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.PistonHead');
    }
    static $isInstance(obj) {
        return obj instanceof PistonHead.$javaClass;
    }
}
exports.default = PistonHead;
