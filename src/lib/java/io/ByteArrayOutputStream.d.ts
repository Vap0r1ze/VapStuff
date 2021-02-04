import OutputStream from './OutputStream.js';
export default interface ByteArrayOutputStream extends OutputStream {
    close(): void;
    flush(): void;
    reset(): void;
    size(): number;
    toByteArray(): Array<number>;
    write(arg0: number): void;
    write(arg0: Array<number>): void;
    write(arg0: Array<number>, arg1: number, arg2: number): void;
    writeTo(arg0: OutputStream): void;
}
export default class ByteArrayOutputStream {
    static get $javaClass(): any;
    constructor();
    constructor(arg0: number);
}
