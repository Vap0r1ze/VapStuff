import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Openable from '../../../../../org/bukkit/block/data/Openable.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Gate extends Directional, Openable, Powerable {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getFaces(): any;
    getFacing(): BlockFace;
    getMaterial(): Material;
    isInWall(): boolean;
    isOpen(): boolean;
    isPowered(): boolean;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setFacing(arg0: BlockFace): void;
    setInWall(arg0: boolean): void;
    setOpen(arg0: boolean): void;
    setPowered(arg0: boolean): void;
}
export default class Gate {
    static get $javaClass(): any;
}
