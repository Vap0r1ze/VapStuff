import Channel from './Channel.js';
import FileChannel from './FileChannel.js';
export default interface FileLock {
    acquiredBy(): Channel;
    channel(): FileChannel;
    close(): void;
    isShared(): boolean;
    isValid(): boolean;
    overlaps(arg0: number, arg1: number): boolean;
    position(): number;
    release(): void;
    size(): number;
}
export default class FileLock {
    static get $javaClass(): any;
}
