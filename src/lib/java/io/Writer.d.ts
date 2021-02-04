import Closeable from './Closeable.js';
import Flushable from './Flushable.js';
export default interface Writer extends Closeable, Flushable {
    append(arg0: string): Writer;
    append(arg0: any): Writer;
    append(arg0: string): any;
    append(arg0: any): any;
    append(arg0: any, arg1: number, arg2: number): Writer;
    append(arg0: any, arg1: number, arg2: number): any;
    close(): void;
    flush(): void;
    write(arg0: Array<string>): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: Array<string>, arg1: number, arg2: number): void;
    write(arg0: string, arg1: number, arg2: number): void;
}
export default class Writer {
    static get $javaClass(): any;
}
