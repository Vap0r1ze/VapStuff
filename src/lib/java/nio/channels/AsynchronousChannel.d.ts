import Channel from './Channel.js';
export default interface AsynchronousChannel extends Channel {
    close(): void;
    isOpen(): boolean;
}
export default class AsynchronousChannel {
    static get $javaClass(): any;
}
