import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Redstone from './Redstone.js';
export default interface RedstoneWire extends MaterialData, Redstone {
    clone(): RedstoneWire;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    getItemType(): Material;
    isPowered(): boolean;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class RedstoneWire {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
