import Buffer from './Buffer.js';
import ByteOrder from './ByteOrder.js';
export default interface ShortBuffer extends Buffer {
    array(): Array<number>;
    array(): any;
    arrayOffset(): number;
    asReadOnlyBuffer(): ShortBuffer;
    capacity(): number;
    clear(): Buffer;
    compact(): ShortBuffer;
    compareTo(arg0: any): number;
    compareTo(arg0: ShortBuffer): number;
    duplicate(): ShortBuffer;
    flip(): Buffer;
    get(): number;
    get(arg0: Array<number>): ShortBuffer;
    get(arg0: number): number;
    get(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
    hasArray(): boolean;
    hasRemaining(): boolean;
    isDirect(): boolean;
    isReadOnly(): boolean;
    limit(): number;
    limit(arg0: number): Buffer;
    mark(): Buffer;
    order(): ByteOrder;
    position(): number;
    position(arg0: number): Buffer;
    put(arg0: Array<number>): ShortBuffer;
    put(arg0: ShortBuffer): ShortBuffer;
    put(arg0: number): ShortBuffer;
    put(arg0: number, arg1: number): ShortBuffer;
    put(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    slice(): ShortBuffer;
}
export default class ShortBuffer {
    static get $javaClass(): any;
    static allocate(arg0: number): ShortBuffer;
    static wrap(arg0: Array<number>): ShortBuffer;
    static wrap(arg0: Array<number>, arg1: number, arg2: number): ShortBuffer;
}
