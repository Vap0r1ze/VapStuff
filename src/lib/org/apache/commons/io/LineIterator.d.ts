import Closeable from '../../../../java/io/Closeable.js';
import Reader from '../../../../java/io/Reader.js';
export default interface LineIterator extends Closeable {
    close(): void;
    forEachRemaining(arg0: any): void;
    hasNext(): boolean;
    next(): any;
    next(): string;
    nextLine(): string;
    remove(): void;
}
export default class LineIterator {
    static get $javaClass(): any;
    constructor(reader: Reader);
    static closeQuietly(iterator: LineIterator): void;
}
