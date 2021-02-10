"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Panda$Gene {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Panda$Gene');
    }
    static $isInstance(obj) {
        return obj instanceof Panda$Gene.$javaClass;
    }
    static get AGGRESSIVE() {
        return this.$javaClass.AGGRESSIVE;
    }
    static get BROWN() {
        return this.$javaClass.BROWN;
    }
    static get LAZY() {
        return this.$javaClass.LAZY;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
    static get PLAYFUL() {
        return this.$javaClass.PLAYFUL;
    }
    static get WEAK() {
        return this.$javaClass.WEAK;
    }
    static get WORRIED() {
        return this.$javaClass.WORRIED;
    }
}
exports.default = Panda$Gene;
