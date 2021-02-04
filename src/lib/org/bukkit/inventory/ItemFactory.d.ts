import Color from '../../../org/bukkit/Color.js';
import ItemMeta from './meta/ItemMeta.js';
import ItemStack from './ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
export default interface ItemFactory {
    asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta;
    asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta;
    getDefaultLeatherColor(): Color;
    getItemMeta(arg0: Material): ItemMeta;
    isApplicable(arg0: ItemMeta, arg1: Material): boolean;
    isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean;
    updateMaterial(arg0: ItemMeta, arg1: Material): Material;
}
export default class ItemFactory {
    static get $javaClass(): any;
}
