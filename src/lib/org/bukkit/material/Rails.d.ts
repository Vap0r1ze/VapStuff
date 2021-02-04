import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
export default interface Rails extends MaterialData {
    clone(): Rails;
    clone(): any;
    clone(): MaterialData;
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
export default class Rails {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
