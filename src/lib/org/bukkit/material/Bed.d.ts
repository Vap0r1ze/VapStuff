import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from './Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Bed extends MaterialData, Directional {
    clone(): Bed;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    isHeadOfBed(): boolean;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    setHeadOfBed(isHeadOfBed: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Bed {
    static get $javaClass(): any;
    constructor();
    constructor(direction: BlockFace);
    constructor(type: Material);
    constructor(type: Material, data: number);
}
