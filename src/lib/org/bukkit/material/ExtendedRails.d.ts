import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Rails from './Rails.js';
export default interface ExtendedRails extends Rails {
    clone(): MaterialData;
    clone(): any;
    clone(): Rails;
    clone(): ExtendedRails;
    getData(): number;
    getDirection(): BlockFace;
    getItemType(): Material;
    isCurve(): boolean;
    isOnSlope(): boolean;
    setData(data: number): void;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class ExtendedRails {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
