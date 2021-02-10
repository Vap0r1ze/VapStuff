"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Door$Hinge {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Door$Hinge');
    }
    static $isInstance(obj) {
        return obj instanceof Door$Hinge.$javaClass;
    }
    static get LEFT() {
        return this.$javaClass.LEFT;
    }
    static get RIGHT() {
        return this.$javaClass.RIGHT;
    }
}
exports.default = Door$Hinge;
