import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Villager from '../../../../org/bukkit/entity/Villager.js';
import Villager$Profession from '../../../../org/bukkit/entity/Villager$Profession.js';
import VillagerCareerChangeEvent$ChangeReason from './VillagerCareerChangeEvent$ChangeReason.js';
export default interface VillagerCareerChangeEvent extends EntityEvent, Cancellable {
    getEntity(): Villager;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getProfession(): Villager$Profession;
    getReason(): VillagerCareerChangeEvent$ChangeReason;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setProfession(profession: Villager$Profession): void;
}
export default class VillagerCareerChangeEvent {
    static get $javaClass(): any;
    constructor(what: Villager, profession: Villager$Profession, reason: VillagerCareerChangeEvent$ChangeReason);
    static getHandlerList(): HandlerList;
}
