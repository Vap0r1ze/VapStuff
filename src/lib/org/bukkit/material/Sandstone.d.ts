import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import SandstoneType from '../../../org/bukkit/SandstoneType.js';
export default interface Sandstone extends MaterialData {
    clone(): any;
    clone(): Sandstone;
    clone(): MaterialData;
    getData(): number;
    getItemType(): Material;
    getType(): SandstoneType;
    setData(data: number): void;
    setType(type: SandstoneType): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Sandstone {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: SandstoneType);
    constructor(type: Material, data: number);
}
