import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityShootBowEvent extends EntityEvent, Cancellable {
    getBow(): ItemStack;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getForce(): number;
    getHandlers(): HandlerList;
    getProjectile(): Entity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setProjectile(projectile: Entity): void;
}
export default class EntityShootBowEvent {
    static get $javaClass(): any;
    constructor(shooter: LivingEntity, bow: ItemStack, projectile: Entity, force: number);
    static getHandlerList(): HandlerList;
}
