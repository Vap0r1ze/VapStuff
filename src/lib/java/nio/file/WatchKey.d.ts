import Watchable from './Watchable.js';
export default interface WatchKey {
    cancel(): void;
    isValid(): boolean;
    pollEvents(): Array<any>;
    reset(): boolean;
    watchable(): Watchable;
}
export default class WatchKey {
    static get $javaClass(): any;
}
