"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Axis {
    static get $javaClass() {
        return Java.type('org.bukkit.Axis');
    }
    static $isInstance(obj) {
        return obj instanceof Axis.$javaClass;
    }
    static get X() {
        return this.$javaClass.X;
    }
    static get Y() {
        return this.$javaClass.Y;
    }
    static get Z() {
        return this.$javaClass.Z;
    }
}
exports.default = Axis;
