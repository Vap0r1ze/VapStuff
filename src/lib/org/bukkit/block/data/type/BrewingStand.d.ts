import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface BrewingStand extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getBottles(): any;
    getMaterial(): Material;
    getMaximumBottles(): number;
    hasBottle(arg0: number): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setBottle(arg0: number, arg1: boolean): void;
}
export default class BrewingStand {
    static get $javaClass(): any;
}
