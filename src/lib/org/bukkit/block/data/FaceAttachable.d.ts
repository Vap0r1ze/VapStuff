import BlockData from './BlockData.js';
import FaceAttachable$AttachedFace from './FaceAttachable$AttachedFace.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface FaceAttachable extends BlockData {
    clone(): BlockData;
    clone(): any;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getAttachedFace(): FaceAttachable$AttachedFace;
    getMaterial(): Material;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setAttachedFace(arg0: FaceAttachable$AttachedFace): void;
}
export default class FaceAttachable {
    static get $javaClass(): any;
}
