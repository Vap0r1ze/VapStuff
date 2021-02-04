import ByteBuffer from '../../../java/nio/ByteBuffer.js';
import CharBuffer from '../../../java/nio/CharBuffer.js';
import Charset from './Charset.js';
import CoderResult from './CoderResult.js';
import CodingErrorAction from './CodingErrorAction.js';
export default interface CharsetDecoder {
    averageCharsPerByte(): number;
    charset(): Charset;
    decode(arg0: ByteBuffer): CharBuffer;
    decode(arg0: ByteBuffer, arg1: CharBuffer, arg2: boolean): CoderResult;
    detectedCharset(): Charset;
    flush(arg0: CharBuffer): CoderResult;
    isAutoDetecting(): boolean;
    isCharsetDetected(): boolean;
    malformedInputAction(): CodingErrorAction;
    maxCharsPerByte(): number;
    onMalformedInput(arg0: CodingErrorAction): CharsetDecoder;
    onUnmappableCharacter(arg0: CodingErrorAction): CharsetDecoder;
    replaceWith(arg0: string): CharsetDecoder;
    replacement(): string;
    reset(): CharsetDecoder;
    unmappableCharacterAction(): CodingErrorAction;
}
export default class CharsetDecoder {
    static get $javaClass(): any;
}
