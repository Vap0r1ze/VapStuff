import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
export default interface MaterialData {
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    getItemType(): Material;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class MaterialData {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
