import BlockData from './BlockData.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface AnaloguePowerable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getMaterial(): Material;
    getMaximumPower(): number;
    getPower(): number;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setPower(arg0: number): void;
}
export default class AnaloguePowerable {
    static get $javaClass(): any;
}
