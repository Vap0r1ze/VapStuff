import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import CharBuffer from '../../../java/nio/CharBuffer.js';
import CharsetDecoder from './CharsetDecoder.js';
import CharsetEncoder from './CharsetEncoder.js';
export default interface Charset {
    aliases(): any;
    canEncode(): boolean;
    compareTo(arg0: any): number;
    compareTo(arg0: Charset): number;
    contains(arg0: Charset): boolean;
    decode(arg0: ByteBuffer): CharBuffer;
    displayName(): string;
    displayName(arg0: any): string;
    encode(arg0: CharBuffer): ByteBuffer;
    encode(arg0: string): ByteBuffer;
    isRegistered(): boolean;
    name(): string;
    newDecoder(): CharsetDecoder;
    newEncoder(): CharsetEncoder;
}
export default class Charset {
    static get $javaClass(): any;
    static availableCharsets(): any;
    static defaultCharset(): Charset;
    static forName(arg0: string): Charset;
    static isSupported(arg0: string): boolean;
}
