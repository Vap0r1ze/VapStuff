import BlockData from './BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
import Rail$Shape from './Rail$Shape.js';
export default interface Rail extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getShape(): Rail$Shape;
    getShapes(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setShape(arg0: Rail$Shape): void;
}
export default class Rail {
    static get $javaClass(): any;
}
