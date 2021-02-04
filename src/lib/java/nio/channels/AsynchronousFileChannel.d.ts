import AsynchronousChannel from './AsynchronousChannel.js';
import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import CompletionHandler from './CompletionHandler.js';
import FileAttribute from '../../../java/nio/file/attribute/FileAttribute.js';
import FileLock from './FileLock.js';
import OpenOption from '../../../java/nio/file/OpenOption.js';
import Path from '../../../java/nio/file/Path.js';
export default interface AsynchronousFileChannel extends AsynchronousChannel {
    close(): void;
    force(arg0: boolean): void;
    isOpen(): boolean;
    lock(): any;
    lock(arg0: any, arg1: CompletionHandler): void;
    lock(arg0: number, arg1: number, arg2: boolean): any;
    lock(arg0: number, arg1: number, arg2: boolean, arg3: any, arg4: CompletionHandler): void;
    read(arg0: ByteBuffer, arg1: number): any;
    read(arg0: ByteBuffer, arg1: number, arg2: any, arg3: CompletionHandler): void;
    size(): number;
    truncate(arg0: number): AsynchronousFileChannel;
    tryLock(): FileLock;
    tryLock(arg0: number, arg1: number, arg2: boolean): FileLock;
    write(arg0: ByteBuffer, arg1: number): any;
    write(arg0: ByteBuffer, arg1: number, arg2: any, arg3: CompletionHandler): void;
}
export default class AsynchronousFileChannel {
    static get $javaClass(): any;
    static open(arg0: Path, arg1: Array<OpenOption>): AsynchronousFileChannel;
    static open(arg0: Path, arg1: any, arg2: any, arg3: Array<FileAttribute>): AsynchronousFileChannel;
}
