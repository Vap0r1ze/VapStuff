"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DragonBattle$RespawnPhase {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.DragonBattle$RespawnPhase');
    }
    static $isInstance(obj) {
        return obj instanceof DragonBattle$RespawnPhase.$javaClass;
    }
    static get END() {
        return this.$javaClass.END;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get PREPARING_TO_SUMMON_PILLARS() {
        return this.$javaClass.PREPARING_TO_SUMMON_PILLARS;
    }
    static get START() {
        return this.$javaClass.START;
    }
    static get SUMMONING_DRAGON() {
        return this.$javaClass.SUMMONING_DRAGON;
    }
    static get SUMMONING_PILLARS() {
        return this.$javaClass.SUMMONING_PILLARS;
    }
}
exports.default = DragonBattle$RespawnPhase;
