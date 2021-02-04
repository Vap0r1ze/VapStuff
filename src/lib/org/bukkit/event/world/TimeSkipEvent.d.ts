import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import TimeSkipEvent$SkipReason from './TimeSkipEvent$SkipReason.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from './WorldEvent.js';
export default interface TimeSkipEvent extends WorldEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getSkipAmount(): number;
    getSkipReason(): TimeSkipEvent$SkipReason;
    getWorld(): World;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setSkipAmount(skipAmount: number): void;
}
export default class TimeSkipEvent {
    static get $javaClass(): any;
    constructor(world: World, skipReason: TimeSkipEvent$SkipReason, skipAmount: number);
    static getHandlerList(): HandlerList;
}
