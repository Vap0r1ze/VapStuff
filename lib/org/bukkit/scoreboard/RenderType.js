"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RenderType {
    static get $javaClass() {
        return Java.type('org.bukkit.scoreboard.RenderType');
    }
    static $isInstance(obj) {
        return obj instanceof RenderType.$javaClass;
    }
    static get HEARTS() {
        return this.$javaClass.HEARTS;
    }
    static get INTEGER() {
        return this.$javaClass.INTEGER;
    }
}
exports.default = RenderType;