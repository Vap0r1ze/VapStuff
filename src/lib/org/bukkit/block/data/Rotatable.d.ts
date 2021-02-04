import BlockData from './BlockData.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Rotatable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getRotation(): BlockFace;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setRotation(arg0: BlockFace): void;
}
export default class Rotatable {
    static get $javaClass(): any;
}
