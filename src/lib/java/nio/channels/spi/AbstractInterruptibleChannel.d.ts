import Channel from '../../../../java/nio/channels/Channel.js';
import InterruptibleChannel from '../../../../java/nio/channels/InterruptibleChannel.js';
export default interface AbstractInterruptibleChannel extends Channel, InterruptibleChannel {
    close(): void;
    isOpen(): boolean;
}
export default class AbstractInterruptibleChannel {
    static get $javaClass(): any;
}
