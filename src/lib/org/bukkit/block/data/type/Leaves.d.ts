import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface Leaves extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getDistance(): number;
    getMaterial(): Material;
    isPersistent(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setDistance(arg0: number): void;
    setPersistent(arg0: boolean): void;
}
export default class Leaves {
    static get $javaClass(): any;
}
