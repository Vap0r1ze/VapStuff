import File from './File.js';
import FileChannel from '../../java/nio/channels/FileChannel.js';
import FileDescriptor from './FileDescriptor.js';
import InputStream from './InputStream.js';
export default interface FileInputStream extends InputStream {
    available(): number;
    close(): void;
    getChannel(): FileChannel;
    getFD(): FileDescriptor;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: Array<number>): number;
    read(arg0: Array<number>, arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}
export default class FileInputStream {
    static get $javaClass(): any;
    constructor(arg0: FileDescriptor);
    constructor(arg0: File);
    constructor(arg0: string);
}
