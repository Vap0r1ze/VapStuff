import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import RedstoneWire$Connection from './RedstoneWire$Connection.js';
export default interface RedstoneWire extends AnaloguePowerable {
    clone(): BlockData;
    clone(): any;
    getAllowedFaces(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getFace(arg0: BlockFace): RedstoneWire$Connection;
    getMaterial(): Material;
    getMaximumPower(): number;
    getPower(): number;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setFace(arg0: BlockFace, arg1: RedstoneWire$Connection): void;
    setPower(arg0: number): void;
}
export default class RedstoneWire {
    static get $javaClass(): any;
}
