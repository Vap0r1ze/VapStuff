import Closeable from '../../../java/io/Closeable.js';
export default interface Channel extends Closeable {
    close(): void;
    isOpen(): boolean;
}
export default class Channel {
    static get $javaClass(): any;
}
