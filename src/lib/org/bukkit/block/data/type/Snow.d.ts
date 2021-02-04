import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Snow extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getLayers(): number;
    getMaterial(): Material;
    getMaximumLayers(): number;
    getMinimumLayers(): number;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setLayers(arg0: number): void;
}
export default class Snow {
    static get $javaClass(): any;
}
