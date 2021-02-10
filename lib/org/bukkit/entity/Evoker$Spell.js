"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Evoker$Spell {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Evoker$Spell');
    }
    static $isInstance(obj) {
        return obj instanceof Evoker$Spell.$javaClass;
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
    static get SUMMON() {
        return this.$javaClass.SUMMON;
    }
    static get WOLOLO() {
        return this.$javaClass.WOLOLO;
    }
}
exports.default = Evoker$Spell;
