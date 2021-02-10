"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slab {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Slab');
    }
    static $isInstance(obj) {
        return obj instanceof Slab.$javaClass;
    }
}
exports.default = Slab;
