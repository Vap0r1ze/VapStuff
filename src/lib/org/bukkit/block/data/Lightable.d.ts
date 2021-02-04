import BlockData from './BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Lightable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    isLit(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setLit(arg0: boolean): void;
}
export default class Lightable {
    static get $javaClass(): any;
}