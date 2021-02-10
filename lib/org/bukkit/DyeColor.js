"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DyeColor {
    static get $javaClass() {
        return Java.type('org.bukkit.DyeColor');
    }
    static $isInstance(obj) {
        return obj instanceof DyeColor.$javaClass;
    }
    static get BLACK() {
        return this.$javaClass.BLACK;
    }
    static get BLUE() {
        return this.$javaClass.BLUE;
    }
    static get BROWN() {
        return this.$javaClass.BROWN;
    }
    static get CYAN() {
        return this.$javaClass.CYAN;
    }
    static get GRAY() {
        return this.$javaClass.GRAY;
    }
    static get GREEN() {
        return this.$javaClass.GREEN;
    }
    static get LIGHT_BLUE() {
        return this.$javaClass.LIGHT_BLUE;
    }
    static get LIGHT_GRAY() {
        return this.$javaClass.LIGHT_GRAY;
    }
    static get LIME() {
        return this.$javaClass.LIME;
    }
    static get MAGENTA() {
        return this.$javaClass.MAGENTA;
    }
    static get ORANGE() {
        return this.$javaClass.ORANGE;
    }
    static get PINK() {
        return this.$javaClass.PINK;
    }
    static get PURPLE() {
        return this.$javaClass.PURPLE;
    }
    static get RED() {
        return this.$javaClass.RED;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
    static get YELLOW() {
        return this.$javaClass.YELLOW;
    }
}
exports.default = DyeColor;
