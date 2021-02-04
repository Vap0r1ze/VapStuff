import Buffer from './Buffer.js';
import ByteOrder from './ByteOrder.js';
export default interface IntBuffer extends Buffer {
    array(): Array<number>;
    array(): any;
    arrayOffset(): number;
    asReadOnlyBuffer(): IntBuffer;
    capacity(): number;
    clear(): Buffer;
    compact(): IntBuffer;
    compareTo(arg0: any): number;
    compareTo(arg0: IntBuffer): number;
    duplicate(): IntBuffer;
    flip(): Buffer;
    get(): number;
    get(arg0: Array<number>): IntBuffer;
    get(arg0: number): number;
    get(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
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
    put(arg0: Array<number>): IntBuffer;
    put(arg0: IntBuffer): IntBuffer;
    put(arg0: number): IntBuffer;
    put(arg0: number, arg1: number): IntBuffer;
    put(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    slice(): IntBuffer;
}
export default class IntBuffer {
    static get $javaClass(): any;
    static allocate(arg0: number): IntBuffer;
    static wrap(arg0: Array<number>): IntBuffer;
    static wrap(arg0: Array<number>, arg1: number, arg2: number): IntBuffer;
}
