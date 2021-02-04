import BlockData from './BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Attachable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    isAttached(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setAttached(arg0: boolean): void;
}
export default class Attachable {
    static get $javaClass(): any;
}
