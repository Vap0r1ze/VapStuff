import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import PortalCreateEvent$CreateReason from './PortalCreateEvent$CreateReason.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from './WorldEvent.js';
export default interface PortalCreateEvent extends WorldEvent, Cancellable {
    getBlocks(): Array<BlockState>;
    getEntity(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getReason(): PortalCreateEvent$CreateReason;
    getWorld(): World;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PortalCreateEvent {
    static get $javaClass(): any;
    constructor(blocks: Array<any>, world: World, reason: PortalCreateEvent$CreateReason);
    constructor(blocks: Array<any>, world: World, entity: Entity, reason: PortalCreateEvent$CreateReason);
    static getHandlerList(): HandlerList;
}
