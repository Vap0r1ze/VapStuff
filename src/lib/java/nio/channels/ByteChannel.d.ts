import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import ReadableByteChannel from './ReadableByteChannel.js';
import WritableByteChannel from './WritableByteChannel.js';
export default interface ByteChannel extends ReadableByteChannel, WritableByteChannel {
    close(): void;
    isOpen(): boolean;
    read(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer): number;
}
export default class ByteChannel {
    static get $javaClass(): any;
}
