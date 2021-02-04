import Closeable from '../../../java/io/Closeable.js';
export default interface DirectoryStream extends Closeable {
    close(): void;
    forEach(arg0: any): void;
    iterator(): any;
    spliterator(): any;
}
export default class DirectoryStream {
    static get $javaClass(): any;
}
