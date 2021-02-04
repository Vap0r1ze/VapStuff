export default interface Buffer {
    array(): any;
    arrayOffset(): number;
    capacity(): number;
    clear(): Buffer;
    flip(): Buffer;
    hasArray(): boolean;
    hasRemaining(): boolean;
    isDirect(): boolean;
    isReadOnly(): boolean;
    limit(): number;
    limit(arg0: number): Buffer;
    mark(): Buffer;
    position(): number;
    position(arg0: number): Buffer;
    remaining(): number;
    reset(): Buffer;
    rewind(): Buffer;
}
export default class Buffer {
    static get $javaClass(): any;
}
