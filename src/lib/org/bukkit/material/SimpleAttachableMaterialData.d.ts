import Attachable from './Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface SimpleAttachableMaterialData extends MaterialData, Attachable {
    clone(): SimpleAttachableMaterialData;
    clone(): MaterialData;
    clone(): any;
    getAttachedFace(): BlockFace;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    setData(data: number): void;
    setFacingDirection(arg0: BlockFace): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class SimpleAttachableMaterialData {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
    constructor(type: Material, direction: BlockFace);
}
