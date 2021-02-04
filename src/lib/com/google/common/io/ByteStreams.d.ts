import ByteArrayDataInput from './ByteArrayDataInput.js';
import ByteArrayDataOutput from './ByteArrayDataOutput.js';
import ByteArrayInputStream from '../../../../java/io/ByteArrayInputStream.js';
import ByteArrayOutputStream from '../../../../java/io/ByteArrayOutputStream.js';
import ByteProcessor from './ByteProcessor.js';
import InputStream from '../../../../java/io/InputStream.js';
import OutputStream from '../../../../java/io/OutputStream.js';
import ReadableByteChannel from '../../../../java/nio/channels/ReadableByteChannel.js';
import WritableByteChannel from '../../../../java/nio/channels/WritableByteChannel.js';
export default class ByteStreams {
    static get $javaClass(): any;
    static copy(from: InputStream, to: OutputStream): number;
    static copy(from: ReadableByteChannel, to: WritableByteChannel): number;
    static exhaust(_in: InputStream): number;
    static limit(_in: InputStream, limit: number): InputStream;
    static newDataInput(bytes: Array<number>): ByteArrayDataInput;
    static newDataInput(byteArrayInputStream: ByteArrayInputStream): ByteArrayDataInput;
    static newDataInput(bytes: Array<number>, start: number): ByteArrayDataInput;
    static newDataOutput(): ByteArrayDataOutput;
    static newDataOutput(byteArrayOutputSteam: ByteArrayOutputStream): ByteArrayDataOutput;
    static newDataOutput(size: number): ByteArrayDataOutput;
    static nullOutputStream(): OutputStream;
    static read(_in: InputStream, b: Array<number>, off: number, len: number): number;
    static readBytes(input: InputStream, processor: ByteProcessor): any;
    static readFully(_in: InputStream, b: Array<number>): void;
    static readFully(_in: InputStream, b: Array<number>, off: number, len: number): void;
    static skipFully(_in: InputStream, n: number): void;
    static toByteArray(_in: InputStream): Array<number>;
}
