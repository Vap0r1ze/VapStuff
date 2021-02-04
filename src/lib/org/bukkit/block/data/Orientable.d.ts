import Axis from '../../../../org/bukkit/Axis.js';
import BlockData from './BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface Orientable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getAxes(): any;
    getAxis(): Axis;
    getMaterial(): Material;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setAxis(arg0: Axis): void;
}
export default class Orientable {
    static get $javaClass(): any;
}
