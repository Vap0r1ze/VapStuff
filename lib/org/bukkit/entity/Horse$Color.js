"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Horse$Color {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Horse$Color');
    }
    static $isInstance(obj) {
        return obj instanceof Horse$Color.$javaClass;
    }
    static get BLACK() {
        return this.$javaClass.BLACK;
    }
    static get BROWN() {
        return this.$javaClass.BROWN;
    }
    static get CHESTNUT() {
        return this.$javaClass.CHESTNUT;
    }
    static get CREAMY() {
        return this.$javaClass.CREAMY;
    }
    static get DARK_BROWN() {
        return this.$javaClass.DARK_BROWN;
    }
    static get GRAY() {
        return this.$javaClass.GRAY;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
}
exports.default = Horse$Color;
