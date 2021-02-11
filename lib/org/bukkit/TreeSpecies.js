"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeSpecies {
    static get $javaClass() {
        return Java.type('org.bukkit.TreeSpecies');
    }
    static $isInstance(obj) {
        return obj instanceof TreeSpecies.$javaClass;
    }
    static get ACACIA() {
        return this.$javaClass.ACACIA;
    }
    static get BIRCH() {
        return this.$javaClass.BIRCH;
    }
    static get DARK_OAK() {
        return this.$javaClass.DARK_OAK;
    }
    static get GENERIC() {
        return this.$javaClass.GENERIC;
    }
    static get JUNGLE() {
        return this.$javaClass.JUNGLE;
    }
    static get REDWOOD() {
        return this.$javaClass.REDWOOD;
    }
}
exports.default = TreeSpecies;