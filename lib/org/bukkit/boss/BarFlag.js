"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BarFlag {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.BarFlag');
    }
    static $isInstance(obj) {
        return obj instanceof BarFlag.$javaClass;
    }
    static get CREATE_FOG() {
        return this.$javaClass.CREATE_FOG;
    }
    static get DARKEN_SKY() {
        return this.$javaClass.DARKEN_SKY;
    }
    static get PLAY_BOSS_MUSIC() {
        return this.$javaClass.PLAY_BOSS_MUSIC;
    }
}
exports.default = BarFlag;
