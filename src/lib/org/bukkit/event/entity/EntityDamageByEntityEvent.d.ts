import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityDamageEvent from './EntityDamageEvent.js';
import EntityDamageEvent$DamageCause from './EntityDamageEvent$DamageCause.js';
import EntityDamageEvent$DamageModifier from './EntityDamageEvent$DamageModifier.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityDamageByEntityEvent extends EntityDamageEvent {
    getCause(): EntityDamageEvent$DamageCause;
    getDamage(): number;
    getDamage(type: EntityDamageEvent$DamageModifier): number;
    getDamager(): Entity;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getFinalDamage(): number;
    getHandlers(): HandlerList;
    getOriginalDamage(type: EntityDamageEvent$DamageModifier): number;
    isApplicable(type: EntityDamageEvent$DamageModifier): boolean;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setDamage(damage: number): void;
    setDamage(type: EntityDamageEvent$DamageModifier, damage: number): void;
}
export default class EntityDamageByEntityEvent {
    static get $javaClass(): any;
    constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, damage: number);
    constructor(damager: Entity, damagee: Entity, cause: EntityDamageEvent$DamageCause, modifiers: any, modifierFunctions: any);
    static getHandlerList(): HandlerList;
}
