import CropState from '../../../org/bukkit/CropState.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Crops extends MaterialData {
    clone(): MaterialData;
    clone(): any;
    clone(): Crops;
    getData(): number;
    getItemType(): Material;
    getState(): CropState;
    setData(data: number): void;
    setState(state: CropState): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Crops {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(state: CropState);
    constructor(type: Material, state: CropState);
    constructor(type: Material, data: number);
}
