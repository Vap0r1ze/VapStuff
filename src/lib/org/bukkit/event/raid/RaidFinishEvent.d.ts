import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from './RaidEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidFinishEvent extends RaidEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getRaid(): Raid;
    getWinners(): Array<Player>;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class RaidFinishEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, winners: Array<any>);
    static getHandlerList(): HandlerList;
}
