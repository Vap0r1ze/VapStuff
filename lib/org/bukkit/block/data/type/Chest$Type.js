"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chest$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Chest$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Chest$Type.$javaClass;
    }
    static get LEFT() {
        return this.$javaClass.LEFT;
    }
    static get RIGHT() {
        return this.$javaClass.RIGHT;
    }
    static get SINGLE() {
        return this.$javaClass.SINGLE;
    }
}
exports.default = Chest$Type;
