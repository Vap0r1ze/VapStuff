import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import MushroomBlockTexture from './types/MushroomBlockTexture.js';
export default interface Mushroom extends MaterialData {
    clone(): MaterialData;
    clone(): any;
    clone(): Mushroom;
    getBlockTexture(): MushroomBlockTexture;
    getData(): number;
    getItemType(): Material;
    getPaintedFaces(): any;
    isFacePainted(face: BlockFace): boolean;
    isStem(): boolean;
    setBlockTexture(texture: MushroomBlockTexture): void;
    setData(data: number): void;
    setFacePainted(face: BlockFace, painted: boolean): void;
    setStem(): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Mushroom {
    static get $javaClass(): any;
    constructor(shroom: Material);
    constructor(shroom: Material, data: number);
    constructor(shroom: Material, texture: MushroomBlockTexture);
    constructor(shroom: Material, capFace: BlockFace);
}
