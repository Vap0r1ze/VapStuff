import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import StructureBlock$Mode from './StructureBlock$Mode.js';
export default interface StructureBlock extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getMode(): StructureBlock$Mode;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setMode(arg0: StructureBlock$Mode): void;
}
export default class StructureBlock {
    static get $javaClass(): any;
}
