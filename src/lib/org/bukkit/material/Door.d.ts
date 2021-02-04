import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from './Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from './MaterialData.js';
import Openable from './Openable.js';
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js';
export default interface Door extends MaterialData, Directional, Openable {
    clone(): Door;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    getFacing(): BlockFace;
    getHinge(): boolean;
    getHingeCorner(): BlockFace;
    getItemType(): Material;
    isOpen(): boolean;
    isTopHalf(): boolean;
    setData(data: number): void;
    setFacingDirection(face: BlockFace): void;
    setHinge(isHingeRight: boolean): void;
    setOpen(isOpen: boolean): void;
    setTopHalf(isTopHalf: boolean): void;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Door {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, isHingeRight: boolean);
    constructor(type: Material, face: BlockFace);
    constructor(species: TreeSpecies, isHingeRight: boolean);
    constructor(species: TreeSpecies, face: BlockFace);
    constructor(type: Material, data: number);
    constructor(type: Material, face: BlockFace, isOpen: boolean);
    constructor(species: TreeSpecies, face: BlockFace, isOpen: boolean);
    static getWoodDoorOfSpecies(species: TreeSpecies): Material;
}
