import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from './Directional.js';
export default interface Attachable extends Directional {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setFacingDirection(arg0: BlockFace): void;
}
export default class Attachable {
    static get $javaClass(): any;
}
