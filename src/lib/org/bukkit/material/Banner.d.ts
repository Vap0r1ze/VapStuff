import Attachable from './Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Banner extends MaterialData, Attachable {
    clone(): any;
    clone(): Banner;
    clone(): MaterialData;
    getAttachedFace(): BlockFace;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    isWallBanner(): boolean;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Banner {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
