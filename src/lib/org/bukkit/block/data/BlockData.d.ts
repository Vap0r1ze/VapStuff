import Material from '../../../../org/bukkit/Material.js';
export default interface BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class BlockData {
    static get $javaClass(): any;
}
