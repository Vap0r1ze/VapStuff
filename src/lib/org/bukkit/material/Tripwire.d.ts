import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Tripwire extends MaterialData {
    clone(): Tripwire;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    getItemType(): Material;
    isActivated(): boolean;
    isObjectTriggering(): boolean;
    setActivated(act: boolean): void;
    setData(data: number): void;
    setObjectTriggering(trig: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Tripwire {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
}
