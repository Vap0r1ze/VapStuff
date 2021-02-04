import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from './Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Redstone from './Redstone.js';
export default interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
    clone(): MaterialData;
    clone(): any;
    clone(): PistonBaseMaterial;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    isPowered(): boolean;
    isSticky(): boolean;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    setPowered(powered: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class PistonBaseMaterial {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
