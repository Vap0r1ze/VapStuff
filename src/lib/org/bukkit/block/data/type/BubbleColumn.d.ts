import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
export default interface BubbleColumn extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    isDrag(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setDrag(arg0: boolean): void;
}
export default class BubbleColumn {
    static get $javaClass(): any;
}
