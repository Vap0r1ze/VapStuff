import CoalType from '../../../org/bukkit/CoalType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Coal extends MaterialData {
    clone(): any;
    clone(): Coal;
    clone(): MaterialData;
    getData(): number;
    getItemType(): Material;
    getType(): CoalType;
    setData(data: number): void;
    setType(type: CoalType): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Coal {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: CoalType);
    constructor(type: Material, data: number);
}
