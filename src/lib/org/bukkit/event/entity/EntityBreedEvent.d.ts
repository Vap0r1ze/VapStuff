import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityBreedEvent extends EntityEvent, Cancellable {
    getBredWith(): ItemStack;
    getBreeder(): LivingEntity;
    getEntity(): LivingEntity;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getExperience(): number;
    getFather(): LivingEntity;
    getHandlers(): HandlerList;
    getMother(): LivingEntity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setExperience(experience: number): void;
}
export default class EntityBreedEvent {
    static get $javaClass(): any;
    constructor(child: LivingEntity, mother: LivingEntity, father: LivingEntity, breeder: LivingEntity, bredWith: ItemStack, experience: number);
    static getHandlerList(): HandlerList;
}
