export default interface ByteProcessor {
    getResult(): any;
    processBytes(arg0: Array<number>, arg1: number, arg2: number): boolean;
}
export default class ByteProcessor {
    static get $javaClass(): any;
}
