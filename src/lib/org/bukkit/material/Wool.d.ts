import Colorable from './Colorable.js';
import DyeColor from '../../../org/bukkit/DyeColor.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Wool extends MaterialData, Colorable {
    clone(): any;
    clone(): MaterialData;
    clone(): Wool;
    getColor(): DyeColor;
    getData(): number;
    getItemType(): Material;
    setColor(color: DyeColor): void;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Wool {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(color: DyeColor);
    constructor(type: Material, data: number);
}
