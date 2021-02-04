import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
export default interface ItemMergeEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Item;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getTarget(): Item;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
}
export default class ItemMergeEvent {
    static get $javaClass(): any;
    constructor(item: Item, target: Item);
    static getHandlerList(): HandlerList;
}
