import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Hanging from '../../../../org/bukkit/entity/Hanging.js';
import HangingBreakEvent from './HangingBreakEvent.js';
import HangingBreakEvent$RemoveCause from './HangingBreakEvent$RemoveCause.js';
export default interface HangingBreakByEntityEvent extends HangingBreakEvent {
    getCause(): HangingBreakEvent$RemoveCause;
    getEntity(): Hanging;
    getEventName(): string;
    getHandlers(): HandlerList;
    getRemover(): Entity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class HangingBreakByEntityEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, remover: Entity);
    constructor(hanging: Hanging, remover: Entity, cause: HangingBreakEvent$RemoveCause);
    static getHandlerList(): HandlerList;
}
