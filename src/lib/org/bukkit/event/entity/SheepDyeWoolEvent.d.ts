import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import DyeColor from '../../../../org/bukkit/DyeColor.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Sheep from '../../../../org/bukkit/entity/Sheep.js';
export default interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
    getColor(): DyeColor;
    getEntity(): Entity;
    getEntity(): Sheep;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setColor(color: DyeColor): void;
}
export default class SheepDyeWoolEvent {
    static get $javaClass(): any;
    constructor(sheep: Sheep, color: DyeColor);
    static getHandlerList(): HandlerList;
}
