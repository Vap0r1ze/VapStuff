import BlockData from './BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Openable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    isOpen(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setOpen(arg0: boolean): void;
}
export default class Openable {
    static get $javaClass(): any;
}
