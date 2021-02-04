import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Piston extends Directional {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getFaces(): any;
    getFacing(): BlockFace;
    getMaterial(): Material;
    isExtended(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setExtended(arg0: boolean): void;
    setFacing(arg0: BlockFace): void;
}
export default class Piston {
    static get $javaClass(): any;
}
