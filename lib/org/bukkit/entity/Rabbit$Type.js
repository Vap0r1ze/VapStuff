"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rabbit$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Rabbit$Type');
    }
    static $isInstance(obj) {
        return obj instanceof Rabbit$Type.$javaClass;
    }
    static get BLACK() {
        return this.$javaClass.BLACK;
    }
    static get BLACK_AND_WHITE() {
        return this.$javaClass.BLACK_AND_WHITE;
    }
    static get BROWN() {
        return this.$javaClass.BROWN;
    }
    static get GOLD() {
        return this.$javaClass.GOLD;
    }
    static get SALT_AND_PEPPER() {
        return this.$javaClass.SALT_AND_PEPPER;
    }
    static get THE_KILLER_BUNNY() {
        return this.$javaClass.THE_KILLER_BUNNY;
    }
    static get WHITE() {
        return this.$javaClass.WHITE;
    }
}
exports.default = Rabbit$Type;