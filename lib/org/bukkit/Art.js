"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Art {
    static get $javaClass() {
        return Java.type('org.bukkit.Art');
    }
    static $isInstance(obj) {
        return obj instanceof Art.$javaClass;
    }
    static get ALBAN() {
        return this.$javaClass.ALBAN;
    }
    static get AZTEC() {
        return this.$javaClass.AZTEC;
    }
    static get AZTEC2() {
        return this.$javaClass.AZTEC2;
    }
    static get BOMB() {
        return this.$javaClass.BOMB;
    }
    static get BURNING_SKULL() {
        return this.$javaClass.BURNING_SKULL;
    }
    static get BUST() {
        return this.$javaClass.BUST;
    }
    static get COURBET() {
        return this.$javaClass.COURBET;
    }
    static get CREEBET() {
        return this.$javaClass.CREEBET;
    }
    static get DONKEY_KONG() {
        return this.$javaClass.DONKEY_KONG;
    }
    static get FIGHTERS() {
        return this.$javaClass.FIGHTERS;
    }
    static get GRAHAM() {
        return this.$javaClass.GRAHAM;
    }
    static get KEBAB() {
        return this.$javaClass.KEBAB;
    }
    static get MATCH() {
        return this.$javaClass.MATCH;
    }
    static get PIGSCENE() {
        return this.$javaClass.PIGSCENE;
    }
    static get PLANT() {
        return this.$javaClass.PLANT;
    }
    static get POINTER() {
        return this.$javaClass.POINTER;
    }
    static get POOL() {
        return this.$javaClass.POOL;
    }
    static get SEA() {
        return this.$javaClass.SEA;
    }
    static get SKELETON() {
        return this.$javaClass.SKELETON;
    }
    static get SKULL_AND_ROSES() {
        return this.$javaClass.SKULL_AND_ROSES;
    }
    static get STAGE() {
        return this.$javaClass.STAGE;
    }
    static get SUNSET() {
        return this.$javaClass.SUNSET;
    }
    static get VOID() {
        return this.$javaClass.VOID;
    }
    static get WANDERER() {
        return this.$javaClass.WANDERER;
    }
    static get WASTELAND() {
        return this.$javaClass.WASTELAND;
    }
    static get WITHER() {
        return this.$javaClass.WITHER;
    }
}
exports.default = Art;
