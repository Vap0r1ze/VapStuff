import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Farmland extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getMaximumMoisture(): number;
    getMoisture(): number;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setMoisture(arg0: number): void;
}
export default class Farmland {
    static get $javaClass(): any;
}
