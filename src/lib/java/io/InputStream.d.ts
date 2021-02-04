import Closeable from './Closeable.js';
export default interface InputStream extends Closeable {
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: Array<number>): number;
    read(arg0: Array<number>, arg1: number, arg2: number): number;
    reset(): void;
    skip(arg0: number): number;
}
export default class InputStream {
    static get $javaClass(): any;
    constructor();
}
