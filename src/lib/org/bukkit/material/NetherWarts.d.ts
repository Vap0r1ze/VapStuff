import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import NetherWartsState from '../../../org/bukkit/NetherWartsState.js';
export default interface NetherWarts extends MaterialData {
    clone(): any;
    clone(): MaterialData;
    clone(): NetherWarts;
    getData(): number;
    getItemType(): Material;
    getState(): NetherWartsState;
    setData(data: number): void;
    setState(state: NetherWartsState): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class NetherWarts {
    static get $javaClass(): any;
    constructor();
    constructor(state: NetherWartsState);
    constructor(type: Material);
    constructor(type: Material, data: number);
}