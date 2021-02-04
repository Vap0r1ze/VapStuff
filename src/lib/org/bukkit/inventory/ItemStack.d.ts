import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Enchantment from '../../../org/bukkit/enchantments/Enchantment.js';
import ItemMeta from './meta/ItemMeta.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface ItemStack extends ConfigurationSerializable {
    addEnchantment(ench: Enchantment, level: number): void;
    addEnchantments(enchantments: any): void;
    addUnsafeEnchantment(ench: Enchantment, level: number): void;
    addUnsafeEnchantments(enchantments: any): void;
    clone(): any;
    clone(): ItemStack;
    containsEnchantment(ench: Enchantment): boolean;
    getAmount(): number;
    getData(): MaterialData;
    getDurability(): number;
    getEnchantmentLevel(ench: Enchantment): number;
    getEnchantments(): any;
    getItemMeta(): ItemMeta;
    getMaxStackSize(): number;
    getType(): Material;
    hasItemMeta(): boolean;
    isSimilar(stack: ItemStack): boolean;
    removeEnchantment(ench: Enchantment): number;
    serialize(): any;
    setAmount(amount: number): void;
    setData(data: MaterialData): void;
    setDurability(durability: number): void;
    setItemMeta(itemMeta: ItemMeta): boolean;
    setType(type: Material): void;
}
export default class ItemStack {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(stack: ItemStack);
    constructor(type: Material, amount: number);
    constructor(type: Material, amount: number, damage: number);
    constructor(type: Material, amount: number, damage: number, data: number);
    static deserialize(args: any): ItemStack;
}
