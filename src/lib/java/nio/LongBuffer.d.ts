import Buffer from './Buffer.js';
import ByteOrder from './ByteOrder.js';
export default interface LongBuffer extends Buffer {
    array(): Array<number>;
    array(): any;
    arrayOffset(): number;
    asReadOnlyBuffer(): LongBuffer;
    capacity(): number;
    clear(): Buffer;
    compact(): LongBuffer;
    compareTo(arg0: any): number;
    compareTo(arg0: LongBuffer): number;
    duplicate(): LongBuffer;
    flip(): Buffer;
    get(): number;
    get(arg0: Array<number>): LongBuffer;
    get(arg0: number): number;
    get(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
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
    put(arg0: Array<number>): LongBuffer;
    put(arg0: LongBuffer): LongBuffer;
    put(arg0: number): LongBuffer;
    put(arg0: number, arg1: number): LongBuffer;
    put(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    slice(): LongBuffer;
}
export default class LongBuffer {
    static get $javaClass(): any;
    static allocate(arg0: number): LongBuffer;
    static wrap(arg0: Array<number>): LongBuffer;
    static wrap(arg0: Array<number>, arg1: number, arg2: number): LongBuffer;
}
