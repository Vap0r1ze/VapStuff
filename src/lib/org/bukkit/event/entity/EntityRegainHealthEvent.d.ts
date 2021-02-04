import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityRegainHealthEvent$RegainReason from './EntityRegainHealthEvent$RegainReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityRegainHealthEvent extends EntityEvent, Cancellable {
    getAmount(): number;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getRegainReason(): EntityRegainHealthEvent$RegainReason;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setAmount(amount: number): void;
    setCancelled(cancel: boolean): void;
}
export default class EntityRegainHealthEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, amount: number, regainReason: EntityRegainHealthEvent$RegainReason);
    static getHandlerList(): HandlerList;
}
