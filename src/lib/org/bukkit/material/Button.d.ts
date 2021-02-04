import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Redstone from './Redstone.js';
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js';
export default interface Button extends SimpleAttachableMaterialData, Redstone {
    clone(): MaterialData;
    clone(): Button;
    clone(): any;
    clone(): SimpleAttachableMaterialData;
    getAttachedFace(): BlockFace;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    isPowered(): boolean;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    setPowered(bool: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Button {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
