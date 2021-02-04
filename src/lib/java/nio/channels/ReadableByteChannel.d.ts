import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import Channel from './Channel.js';
export default interface ReadableByteChannel extends Channel {
    close(): void;
    isOpen(): boolean;
    read(arg0: ByteBuffer): number;
}
export default class ReadableByteChannel {
    static get $javaClass(): any;
}
