import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Sapling extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getMaximumStage(): number;
    getStage(): number;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setStage(arg0: number): void;
}
export default class Sapling {
    static get $javaClass(): any;
}
