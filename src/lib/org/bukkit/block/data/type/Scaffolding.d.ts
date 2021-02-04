import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Scaffolding extends Waterlogged {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getDistance(): number;
    getMaterial(): Material;
    getMaximumDistance(): number;
    isBottom(): boolean;
    isWaterlogged(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setBottom(arg0: boolean): void;
    setDistance(arg0: number): void;
    setWaterlogged(arg0: boolean): void;
}
export default class Scaffolding {
    static get $javaClass(): any;
}
