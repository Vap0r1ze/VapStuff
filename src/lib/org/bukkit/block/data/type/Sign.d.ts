import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import Rotatable from '../../../../../org/bukkit/block/data/Rotatable.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Sign extends Rotatable, Waterlogged {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getRotation(): BlockFace;
    isWaterlogged(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setRotation(arg0: BlockFace): void;
    setWaterlogged(arg0: boolean): void;
}
export default class Sign {
    static get $javaClass(): any;
}
