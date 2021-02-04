import Closeable from './Closeable.js';
import Flushable from './Flushable.js';
export default interface OutputStream extends Closeable, Flushable {
    close(): void;
    flush(): void;
    write(arg0: Array<number>): void;
    write(arg0: number): void;
    write(arg0: Array<number>, arg1: number, arg2: number): void;
}
export default class OutputStream {
    static get $javaClass(): any;
    constructor();
}
