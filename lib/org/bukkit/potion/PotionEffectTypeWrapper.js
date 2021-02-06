export default class PotionEffectTypeWrapper {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionEffectTypeWrapper');
    }
    static $isInstance(obj) {
        return obj instanceof PotionEffectTypeWrapper.$javaClass;
    }
    static get ABSORPTION() {
        return PotionEffectTypeWrapper.$javaClass.ABSORPTION;
    }
    static get BAD_OMEN() {
        return PotionEffectTypeWrapper.$javaClass.BAD_OMEN;
    }
    static get BLINDNESS() {
        return PotionEffectTypeWrapper.$javaClass.BLINDNESS;
    }
    static get CONDUIT_POWER() {
        return PotionEffectTypeWrapper.$javaClass.CONDUIT_POWER;
    }
    static get CONFUSION() {
        return PotionEffectTypeWrapper.$javaClass.CONFUSION;
    }
    static get DAMAGE_RESISTANCE() {
        return PotionEffectTypeWrapper.$javaClass.DAMAGE_RESISTANCE;
    }
    static get DOLPHINS_GRACE() {
        return PotionEffectTypeWrapper.$javaClass.DOLPHINS_GRACE;
    }
    static get FAST_DIGGING() {
        return PotionEffectTypeWrapper.$javaClass.FAST_DIGGING;
    }
    static get FIRE_RESISTANCE() {
        return PotionEffectTypeWrapper.$javaClass.FIRE_RESISTANCE;
    }
    static get GLOWING() {
        return PotionEffectTypeWrapper.$javaClass.GLOWING;
    }
    static get HARM() {
        return PotionEffectTypeWrapper.$javaClass.HARM;
    }
    static get HEAL() {
        return PotionEffectTypeWrapper.$javaClass.HEAL;
    }
    static get HEALTH_BOOST() {
        return PotionEffectTypeWrapper.$javaClass.HEALTH_BOOST;
    }
    static get HERO_OF_THE_VILLAGE() {
        return PotionEffectTypeWrapper.$javaClass.HERO_OF_THE_VILLAGE;
    }
    static get HUNGER() {
        return PotionEffectTypeWrapper.$javaClass.HUNGER;
    }
    static get INCREASE_DAMAGE() {
        return PotionEffectTypeWrapper.$javaClass.INCREASE_DAMAGE;
    }
    static get INVISIBILITY() {
        return PotionEffectTypeWrapper.$javaClass.INVISIBILITY;
    }
    static get JUMP() {
        return PotionEffectTypeWrapper.$javaClass.JUMP;
    }
    static get LEVITATION() {
        return PotionEffectTypeWrapper.$javaClass.LEVITATION;
    }
    static get LUCK() {
        return PotionEffectTypeWrapper.$javaClass.LUCK;
    }
    static get NIGHT_VISION() {
        return PotionEffectTypeWrapper.$javaClass.NIGHT_VISION;
    }
    static get POISON() {
        return PotionEffectTypeWrapper.$javaClass.POISON;
    }
    static get REGENERATION() {
        return PotionEffectTypeWrapper.$javaClass.REGENERATION;
    }
    static get SATURATION() {
        return PotionEffectTypeWrapper.$javaClass.SATURATION;
    }
    static get SLOW() {
        return PotionEffectTypeWrapper.$javaClass.SLOW;
    }
    static get SLOW_DIGGING() {
        return PotionEffectTypeWrapper.$javaClass.SLOW_DIGGING;
    }
    static get SLOW_FALLING() {
        return PotionEffectTypeWrapper.$javaClass.SLOW_FALLING;
    }
    static get SPEED() {
        return PotionEffectTypeWrapper.$javaClass.SPEED;
    }
    static get UNLUCK() {
        return PotionEffectTypeWrapper.$javaClass.UNLUCK;
    }
    static get WATER_BREATHING() {
        return PotionEffectTypeWrapper.$javaClass.WATER_BREATHING;
    }
    static get WEAKNESS() {
        return PotionEffectTypeWrapper.$javaClass.WEAKNESS;
    }
    static get WITHER() {
        return PotionEffectTypeWrapper.$javaClass.WITHER;
    }
    static getById(...args) {
        return PotionEffectTypeWrapper.$javaClass.getById(...args);
    }
    static getByName(...args) {
        return PotionEffectTypeWrapper.$javaClass.getByName(...args);
    }
    static registerPotionEffectType(...args) {
        return PotionEffectTypeWrapper.$javaClass.registerPotionEffectType(...args);
    }
    static stopAcceptingRegistrations(...args) {
        return PotionEffectTypeWrapper.$javaClass.stopAcceptingRegistrations(...args);
    }
    static values(...args) {
        return PotionEffectTypeWrapper.$javaClass.values(...args);
    }
}
