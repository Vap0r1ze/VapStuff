import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from './RaidEvent.js';
import Raider from '../../../../org/bukkit/entity/Raider.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidSpawnWaveEvent extends RaidEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPatrolLeader(): Raider;
    getRaid(): Raid;
    getRaiders(): Array<Raider>;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class RaidSpawnWaveEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, leader: Raider, raiders: Array<any>);
    static getHandlerList(): HandlerList;
}
