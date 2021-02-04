import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import PotionBrewer from './PotionBrewer.js';
import PotionEffect from './PotionEffect.js';
import PotionType from './PotionType.js';
export default interface Potion {
    apply(to: ItemStack): void;
    apply(to: LivingEntity): void;
    extend(): Potion;
    getEffects(): Array<PotionEffect>;
    getLevel(): number;
    getNameId(): number;
    getType(): PotionType;
    hasExtendedDuration(): boolean;
    isSplash(): boolean;
    setHasExtendedDuration(isExtended: boolean): void;
    setLevel(level: number): void;
    setSplash(isSplash: boolean): void;
    setType(type: PotionType): void;
    splash(): Potion;
    toDamageValue(): number;
    toItemStack(amount: number): ItemStack;
}
export default class Potion {
    static get $javaClass(): any;
    constructor(type: PotionType);
    constructor(type: PotionType, level: number);
    constructor(type: PotionType, level: number, splash: boolean);
    constructor(type: PotionType, level: number, splash: boolean, extended: boolean);
    static fromDamage(damage: number): Potion;
    static fromItemStack(item: ItemStack): Potion;
    static getBrewer(): PotionBrewer;
    static setPotionBrewer(other: PotionBrewer): void;
}
