import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import PressureSensor from './PressureSensor.js';
export default interface PressurePlate extends MaterialData, PressureSensor {
    clone(): PressurePlate;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    getItemType(): Material;
    isPressed(): boolean;
    setData(data: number): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class PressurePlate {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
