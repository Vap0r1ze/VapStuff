import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
export default interface EntityDropItemEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getItemDrop(): Item;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class EntityDropItemEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, drop: Item);
    static getHandlerList(): HandlerList;
}
