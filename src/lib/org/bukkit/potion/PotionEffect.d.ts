import Color from '../../../org/bukkit/Color.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionEffectType from './PotionEffectType.js';
export default interface PotionEffect extends ConfigurationSerializable {
    apply(entity: LivingEntity): boolean;
    getAmplifier(): number;
    getColor(): Color;
    getDuration(): number;
    getType(): PotionEffectType;
    hasIcon(): boolean;
    hasParticles(): boolean;
    isAmbient(): boolean;
    serialize(): any;
}
export default class PotionEffect {
    static get $javaClass(): any;
    constructor(map: any);
    constructor(type: PotionEffectType, duration: number, amplifier: number);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean);
    constructor(type: PotionEffectType, duration: number, amplifier: number, ambient: boolean, particles: boolean, icon: boolean);
}
