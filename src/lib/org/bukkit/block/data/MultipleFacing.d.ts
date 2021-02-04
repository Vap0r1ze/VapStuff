import BlockData from './BlockData.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface MultipleFacing extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAllowedFaces(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getFaces(): any;
    getMaterial(): Material;
    hasFace(arg0: BlockFace): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setFace(arg0: BlockFace, arg1: boolean): void;
}
export default class MultipleFacing {
    static get $javaClass(): any;
}
