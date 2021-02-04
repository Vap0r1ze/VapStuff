import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Hanging from '../../../../org/bukkit/entity/Hanging.js';
import HangingBreakEvent$RemoveCause from './HangingBreakEvent$RemoveCause.js';
import HangingEvent from './HangingEvent.js';
export default interface HangingBreakEvent extends HangingEvent, Cancellable {
    getCause(): HangingBreakEvent$RemoveCause;
    getEntity(): Hanging;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class HangingBreakEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, cause: HangingBreakEvent$RemoveCause);
    static getHandlerList(): HandlerList;
}
