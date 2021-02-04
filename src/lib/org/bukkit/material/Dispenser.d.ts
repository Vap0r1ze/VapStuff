import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import DirectionalContainer from './DirectionalContainer.js';
import FurnaceAndDispenser from './FurnaceAndDispenser.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Dispenser extends FurnaceAndDispenser {
    clone(): MaterialData;
    clone(): DirectionalContainer;
    clone(): Dispenser;
    clone(): any;
    clone(): FurnaceAndDispenser;
    getData(): number;
    getFacing(): BlockFace;
    getItemType(): Material;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Dispenser {
    static get $javaClass(): any;
    constructor();
    constructor(direction: BlockFace);
    constructor(type: Material);
    constructor(type: Material, data: number);
}
