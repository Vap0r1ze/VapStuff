import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
import ProjectileHitEvent from './ProjectileHitEvent.js';
import ThrownPotion from '../../../../org/bukkit/entity/ThrownPotion.js';
export default interface PotionSplashEvent extends ProjectileHitEvent, Cancellable {
    getAffectedEntities(): Array<LivingEntity>;
    getEntity(): Entity;
    getEntity(): ThrownPotion;
    getEntity(): Projectile;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getIntensity(entity: LivingEntity): number;
    getPotion(): ThrownPotion;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setIntensity(entity: LivingEntity, intensity: number): void;
}
export default class PotionSplashEvent {
    static get $javaClass(): any;
    constructor(potion: ThrownPotion, affectedEntities: any);
    static getHandlerList(): HandlerList;
}
