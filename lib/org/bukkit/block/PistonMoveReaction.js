"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PistonMoveReaction {
    static get $javaClass() {
        return Java.type('org.bukkit.block.PistonMoveReaction');
    }
    static $isInstance(obj) {
        return obj instanceof PistonMoveReaction.$javaClass;
    }
    static get BLOCK() {
        return this.$javaClass.BLOCK;
    }
    static get BREAK() {
        return this.$javaClass.BREAK;
    }
    static get IGNORE() {
        return this.$javaClass.IGNORE;
    }
    static get MOVE() {
        return this.$javaClass.MOVE;
    }
    static get PUSH_ONLY() {
        return this.$javaClass.PUSH_ONLY;
    }
}
exports.default = PistonMoveReaction;
