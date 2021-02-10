"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PotionEffectType {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionEffectType');
    }
    static $isInstance(obj) {
        return obj instanceof PotionEffectType.$javaClass;
    }
    static get ABSORPTION() {
        return PotionEffectType.$javaClass.ABSORPTION;
    }
    static get BAD_OMEN() {
        return PotionEffectType.$javaClass.BAD_OMEN;
    }
    static get BLINDNESS() {
        return PotionEffectType.$javaClass.BLINDNESS;
    }
    static get CONDUIT_POWER() {
        return PotionEffectType.$javaClass.CONDUIT_POWER;
    }
    static get CONFUSION() {
        return PotionEffectType.$javaClass.CONFUSION;
    }
    static get DAMAGE_RESISTANCE() {
        return PotionEffectType.$javaClass.DAMAGE_RESISTANCE;
    }
    static get DOLPHINS_GRACE() {
        return PotionEffectType.$javaClass.DOLPHINS_GRACE;
    }
    static get FAST_DIGGING() {
        return PotionEffectType.$javaClass.FAST_DIGGING;
    }
    static get FIRE_RESISTANCE() {
        return PotionEffectType.$javaClass.FIRE_RESISTANCE;
    }
    static get GLOWING() {
        return PotionEffectType.$javaClass.GLOWING;
    }
    static get HARM() {
        return PotionEffectType.$javaClass.HARM;
    }
    static get HEAL() {
        return PotionEffectType.$javaClass.HEAL;
    }
    static get HEALTH_BOOST() {
        return PotionEffectType.$javaClass.HEALTH_BOOST;
    }
    static get HERO_OF_THE_VILLAGE() {
        return PotionEffectType.$javaClass.HERO_OF_THE_VILLAGE;
    }
    static get HUNGER() {
        return PotionEffectType.$javaClass.HUNGER;
    }
    static get INCREASE_DAMAGE() {
        return PotionEffectType.$javaClass.INCREASE_DAMAGE;
    }
    static get INVISIBILITY() {
        return PotionEffectType.$javaClass.INVISIBILITY;
    }
    static get JUMP() {
        return PotionEffectType.$javaClass.JUMP;
    }
    static get LEVITATION() {
        return PotionEffectType.$javaClass.LEVITATION;
    }
    static get LUCK() {
        return PotionEffectType.$javaClass.LUCK;
    }
    static get NIGHT_VISION() {
        return PotionEffectType.$javaClass.NIGHT_VISION;
    }
    static get POISON() {
        return PotionEffectType.$javaClass.POISON;
    }
    static get REGENERATION() {
        return PotionEffectType.$javaClass.REGENERATION;
    }
    static get SATURATION() {
        return PotionEffectType.$javaClass.SATURATION;
    }
    static get SLOW() {
        return PotionEffectType.$javaClass.SLOW;
    }
    static get SLOW_DIGGING() {
        return PotionEffectType.$javaClass.SLOW_DIGGING;
    }
    static get SLOW_FALLING() {
        return PotionEffectType.$javaClass.SLOW_FALLING;
    }
    static get SPEED() {
        return PotionEffectType.$javaClass.SPEED;
    }
    static get UNLUCK() {
        return PotionEffectType.$javaClass.UNLUCK;
    }
    static get WATER_BREATHING() {
        return PotionEffectType.$javaClass.WATER_BREATHING;
    }
    static get WEAKNESS() {
        return PotionEffectType.$javaClass.WEAKNESS;
    }
    static get WITHER() {
        return PotionEffectType.$javaClass.WITHER;
    }
    static getById(...args) {
        return PotionEffectType.$javaClass.getById(...args);
    }
    static getByName(...args) {
        return PotionEffectType.$javaClass.getByName(...args);
    }
    static registerPotionEffectType(...args) {
        return PotionEffectType.$javaClass.registerPotionEffectType(...args);
    }
    static stopAcceptingRegistrations(...args) {
        return PotionEffectType.$javaClass.stopAcceptingRegistrations(...args);
    }
    static values(...args) {
        return PotionEffectType.$javaClass.values(...args);
    }
}
exports.default = PotionEffectType;
