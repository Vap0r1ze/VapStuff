"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spellcaster$Spell {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Spellcaster$Spell');
    }
    static $isInstance(obj) {
        return obj instanceof Spellcaster$Spell.$javaClass;
    }
    static get BLINDNESS() {
        return this.$javaClass.BLINDNESS;
    }
    static get DISAPPEAR() {
        return this.$javaClass.DISAPPEAR;
    }
    static get FANGS() {
        return this.$javaClass.FANGS;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get SUMMON_VEX() {
        return this.$javaClass.SUMMON_VEX;
    }
    static get WOLOLO() {
        return this.$javaClass.WOLOLO;
    }
}
exports.default = Spellcaster$Spell;
