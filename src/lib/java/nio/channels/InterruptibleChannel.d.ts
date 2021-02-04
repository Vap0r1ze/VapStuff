import Channel from './Channel.js';
export default interface InterruptibleChannel extends Channel {
    close(): void;
    isOpen(): boolean;
}
export default class InterruptibleChannel {
    static get $javaClass(): any;
}
