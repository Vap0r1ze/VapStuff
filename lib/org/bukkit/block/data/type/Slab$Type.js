"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slab$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Slab$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Slab$Type.$javaClass;
    }
    static get BOTTOM() {
        return this.$javaClass.BOTTOM;
    }
    static get DOUBLE() {
        return this.$javaClass.DOUBLE;
    }
    static get TOP() {
        return this.$javaClass.TOP;
    }
}
exports.default = Slab$Type;
