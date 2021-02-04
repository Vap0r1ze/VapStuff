import Colorable from './Colorable.js';
import DyeColor from '../../../org/bukkit/DyeColor.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Dye extends MaterialData, Colorable {
    clone(): any;
    clone(): MaterialData;
    clone(): Dye;
    getColor(): DyeColor;
    getData(): number;
    getItemType(): Material;
    setColor(color: DyeColor): void;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Dye {
    static get $javaClass(): any;
    constructor();
    constructor(color: DyeColor);
    constructor(type: Material);
    constructor(type: Material, data: number);
}
