import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Slime from '../../../../org/bukkit/entity/Slime.js';
export default interface SlimeSplitEvent extends EntityEvent, Cancellable {
    getCount(): number;
    getEntity(): Slime;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCount(count: number): void;
}
export default class SlimeSplitEvent {
    static get $javaClass(): any;
    constructor(slime: Slime, count: number);
    static getHandlerList(): HandlerList;
}
