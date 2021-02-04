import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import ReadableByteChannel from './ReadableByteChannel.js';
export default interface ScatteringByteChannel extends ReadableByteChannel {
    close(): void;
    isOpen(): boolean;
    read(arg0: Array<ByteBuffer>): number;
    read(arg0: ByteBuffer): number;
    read(arg0: Array<ByteBuffer>, arg1: number, arg2: number): number;
}
export default class ScatteringByteChannel {
    static get $javaClass(): any;
}
