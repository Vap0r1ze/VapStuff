import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface FlowerPot extends MaterialData {
    clone(): any;
    clone(): MaterialData;
    clone(): FlowerPot;
    getContents(): MaterialData;
    getData(): number;
    getItemType(): Material;
    setContents(materialData: MaterialData): void;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class FlowerPot {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
