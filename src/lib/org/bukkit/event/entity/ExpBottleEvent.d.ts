import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
import ProjectileHitEvent from './ProjectileHitEvent.js';
import ThrownExpBottle from '../../../../org/bukkit/entity/ThrownExpBottle.js';
export default interface ExpBottleEvent extends ProjectileHitEvent {
    getEntity(): Entity;
    getEntity(): ThrownExpBottle;
    getEntity(): Projectile;
    getEntityType(): EntityType;
    getEventName(): string;
    getExperience(): number;
    getHandlers(): HandlerList;
    getHitBlock(): Block;
    getHitBlockFace(): BlockFace;
    getHitEntity(): Entity;
    getShowEffect(): boolean;
    isAsynchronous(): boolean;
    setExperience(exp: number): void;
    setShowEffect(showEffect: boolean): void;
}
export default class ExpBottleEvent {
    static get $javaClass(): any;
    constructor(bottle: ThrownExpBottle, exp: number);
    static getHandlerList(): HandlerList;
}
