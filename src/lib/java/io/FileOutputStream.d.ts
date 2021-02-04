import File from './File.js';
import FileChannel from '../../java/nio/channels/FileChannel.js';
import FileDescriptor from './FileDescriptor.js';
import OutputStream from './OutputStream.js';
export default interface FileOutputStream extends OutputStream {
    close(): void;
    flush(): void;
    getChannel(): FileChannel;
    getFD(): FileDescriptor;
    write(arg0: Array<number>): void;
    write(arg0: number): void;
    write(arg0: Array<number>, arg1: number, arg2: number): void;
}
export default class FileOutputStream {
    static get $javaClass(): any;
    constructor(arg0: FileDescriptor);
    constructor(arg0: File);
    constructor(arg0: string);
    constructor(arg0: File, arg1: boolean);
    constructor(arg0: string, arg1: boolean);
}
