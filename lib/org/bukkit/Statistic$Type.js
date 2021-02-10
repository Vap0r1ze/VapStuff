"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Statistic$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.Statistic$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Statistic$Type.$javaClass;
    }
    static get BLOCK() {
        return this.$javaClass.BLOCK;
    }
    static get ENTITY() {
        return this.$javaClass.ENTITY;
    }
    static get ITEM() {
        return this.$javaClass.ITEM;
    }
    static get UNTYPED() {
        return this.$javaClass.UNTYPED;
    }
}
exports.default = Statistic$Type;
