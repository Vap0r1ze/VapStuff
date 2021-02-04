import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from './RaidEvent.js';
import RaidStopEvent$Reason from './RaidStopEvent$Reason.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidStopEvent extends RaidEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getRaid(): Raid;
    getReason(): RaidStopEvent$Reason;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class RaidStopEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, reason: RaidStopEvent$Reason);
    static getHandlerList(): HandlerList;
}
