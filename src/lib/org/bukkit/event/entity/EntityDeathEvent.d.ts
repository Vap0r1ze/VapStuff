import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityDeathEvent extends EntityEvent {
    getDroppedExp(): number;
    getDrops(): Array<ItemStack>;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    setDroppedExp(exp: number): void;
}
export default class EntityDeathEvent {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, drops: Array<any>);
    constructor(what: LivingEntity, drops: Array<any>, droppedExp: number);
    static getHandlerList(): HandlerList;
}
