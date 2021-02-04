import PotionEffectType from './PotionEffectType.js';
export default interface PotionType {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    getEffectType(): PotionEffectType;
    getMaxLevel(): number;
    isExtendable(): boolean;
    isInstant(): boolean;
    isUpgradeable(): boolean;
    name(): string;
    ordinal(): number;
}
export default class PotionType {
    static get $javaClass(): any;
    static get AWKWARD(): PotionType;
    static get FIRE_RESISTANCE(): PotionType;
    static get INSTANT_DAMAGE(): PotionType;
    static get INSTANT_HEAL(): PotionType;
    static get INVISIBILITY(): PotionType;
    static get JUMP(): PotionType;
    static get LUCK(): PotionType;
    static get MUNDANE(): PotionType;
    static get NIGHT_VISION(): PotionType;
    static get POISON(): PotionType;
    static get REGEN(): PotionType;
    static get SLOWNESS(): PotionType;
    static get SLOW_FALLING(): PotionType;
    static get SPEED(): PotionType;
    static get STRENGTH(): PotionType;
    static get THICK(): PotionType;
    static get TURTLE_MASTER(): PotionType;
    static get UNCRAFTABLE(): PotionType;
    static get WATER(): PotionType;
    static get WATER_BREATHING(): PotionType;
    static get WEAKNESS(): PotionType;
}
