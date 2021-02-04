import Closeable from '../../../java/io/Closeable.js';
import WatchKey from './WatchKey.js';
export default interface WatchService extends Closeable {
    close(): void;
    poll(): WatchKey;
    poll(arg0: number, arg1: any): WatchKey;
    take(): WatchKey;
}
export default class WatchService {
    static get $javaClass(): any;
}
