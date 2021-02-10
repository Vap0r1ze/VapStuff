"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Switch$Face {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Switch$Face');
    }
    static $isInstance(obj) {
        return obj instanceof Switch$Face.$javaClass;
    }
    static get CEILING() {
        return this.$javaClass.CEILING;
    }
    static get FLOOR() {
        return this.$javaClass.FLOOR;
    }
    static get WALL() {
        return this.$javaClass.WALL;
    }
}
exports.default = Switch$Face;
