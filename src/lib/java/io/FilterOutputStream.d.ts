import OutputStream from './OutputStream.js';
export default interface FilterOutputStream extends OutputStream {
    close(): void;
    flush(): void;
    write(arg0: Array<number>): void;
    write(arg0: number): void;
    write(arg0: Array<number>, arg1: number, arg2: number): void;
}
export default class FilterOutputStream {
    static get $javaClass(): any;
    constructor(arg0: OutputStream);
}
