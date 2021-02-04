import Buffer from './Buffer.js';
import ByteOrder from './ByteOrder.js';
export default interface FloatBuffer extends Buffer {
    array(): Array<number>;
    array(): any;
    arrayOffset(): number;
    asReadOnlyBuffer(): FloatBuffer;
    capacity(): number;
    clear(): Buffer;
    compact(): FloatBuffer;
    compareTo(arg0: any): number;
    compareTo(arg0: FloatBuffer): number;
    duplicate(): FloatBuffer;
    flip(): Buffer;
    get(): number;
    get(arg0: Array<number>): FloatBuffer;
    get(arg0: number): number;
    get(arg0: Array<number>, arg1: number, arg2: number): FloatBuffer;
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
    put(arg0: Array<number>): FloatBuffer;
    put(arg0: FloatBuffer): FloatBuffer;
    put(arg0: number): FloatBuffer;
    put(arg0: number, arg1: number): FloatBuffer;
    put(arg0: Array<number>, arg1: number, arg2: number): FloatBuffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
    slice(): FloatBuffer;
}
export default class FloatBuffer {
    static get $javaClass(): any;
    static allocate(arg0: number): FloatBuffer;
    static wrap(arg0: Array<number>): FloatBuffer;
    static wrap(arg0: Array<number>, arg1: number, arg2: number): FloatBuffer;
}
