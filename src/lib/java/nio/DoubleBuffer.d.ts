import Buffer from './Buffer.js';
import ByteOrder from './ByteOrder.js';
export default interface DoubleBuffer extends Buffer {
    array(): Array<number>;
    array(): any;
    arrayOffset(): number;
    asReadOnlyBuffer(): DoubleBuffer;
    capacity(): number;
    clear(): Buffer;
    compact(): DoubleBuffer;
    compareTo(arg0: any): number;
    compareTo(arg0: DoubleBuffer): number;
    duplicate(): DoubleBuffer;
    flip(): Buffer;
    get(): number;
    get(arg0: Array<number>): DoubleBuffer;
    get(arg0: number): number;
    get(arg0: Array<number>, arg1: number, arg2: number): DoubleBuffer;
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
    put(arg0: Array<number>): DoubleBuffer;
    put(arg0: DoubleBuffer): DoubleBuffer;
    put(arg0: number): DoubleBuffer;
    put(arg0: number, arg1: number): DoubleBuffer;
    put(arg0: Array<number>, arg1: number, arg2: number): DoubleBuffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    slice(): DoubleBuffer;
}
export default class DoubleBuffer {
    static get $javaClass(): any;
    static allocate(arg0: number): DoubleBuffer;
    static wrap(arg0: Array<number>): DoubleBuffer;
    static wrap(arg0: Array<number>, arg1: number, arg2: number): DoubleBuffer;
}
