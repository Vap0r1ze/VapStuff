import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Redstone from './Redstone.js';
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js';
export default interface TripwireHook extends SimpleAttachableMaterialData, Redstone {
    clone(): MaterialData;
    clone(): TripwireHook;
    clone(): any;
    clone(): SimpleAttachableMaterialData;
    getAttachedFace(): BlockFace;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    isActivated(): boolean;
    isConnected(): boolean;
    isPowered(): boolean;
    setActivated(act: boolean): void;
    setConnected(connected: boolean): void;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class TripwireHook {
    static get $javaClass(): any;
    constructor();
    constructor(dir: BlockFace);
    constructor(type: Material, data: number);
}
