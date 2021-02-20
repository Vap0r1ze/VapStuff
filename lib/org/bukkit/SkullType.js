"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkullType {
    static get $javaClass() {
        return Java.type('org.bukkit.SkullType');
    }
    static $isInstance(obj) {
        return obj instanceof SkullType.$javaClass;
    }
    static get CREEPER() {
        return this.$javaClass.CREEPER;
    }
    static get DRAGON() {
        return this.$javaClass.DRAGON;
    }
    static get PLAYER() {
        return this.$javaClass.PLAYER;
    }
    static get SKELETON() {
        return this.$javaClass.SKELETON;
    }
    static get WITHER() {
        return this.$javaClass.WITHER;
    }
    static get ZOMBIE() {
        return this.$javaClass.ZOMBIE;
    }
}
exports.default = SkullType;