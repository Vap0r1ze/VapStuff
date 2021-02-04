import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from './Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Stairs extends MaterialData, Directional {
    clone(): Stairs;
    clone(): any;
    clone(): MaterialData;
    getAscendingDirection(): BlockFace;
    getData(): number;
    getDescendingDirection(): BlockFace;
    getFacing(): BlockFace;
    getItemType(): Material;
    isInverted(): boolean;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    setInverted(inv: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Stairs {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
