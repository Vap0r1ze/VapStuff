"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HangingBreakEvent$RemoveCause {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingBreakEvent$RemoveCause');
    }
    static $isInstance(obj) {
        return obj instanceof HangingBreakEvent$RemoveCause.$javaClass;
    }
    static get DEFAULT() {
        return this.$javaClass.DEFAULT;
    }
    static get ENTITY() {
        return this.$javaClass.ENTITY;
    }
    static get EXPLOSION() {
        return this.$javaClass.EXPLOSION;
    }
    static get OBSTRUCTION() {
        return this.$javaClass.OBSTRUCTION;
    }
    static get PHYSICS() {
        return this.$javaClass.PHYSICS;
    }
}
exports.default = HangingBreakEvent$RemoveCause;