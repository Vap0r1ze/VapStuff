import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from './Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Redstone from './Redstone.js';
export default interface Diode extends MaterialData, Directional, Redstone {
    clone(): any;
    clone(): Diode;
    clone(): MaterialData;
    getData(): number;
    getDelay(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    isPowered(): boolean;
    setData(data: number): void;
    setDelay(delay: number): void;
    setFacingDirection(face: BlockFace): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Diode {
    static get $javaClass(): any;
    constructor();
    constructor(facingDirection: BlockFace);
    constructor(type: Material);
    constructor(facingDirection: BlockFace, delay: number);
    constructor(type: Material, data: number);
    constructor(facingDirection: BlockFace, delay: number, state: boolean);
}
