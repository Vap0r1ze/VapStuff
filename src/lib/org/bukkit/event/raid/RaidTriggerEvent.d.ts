import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import Raid from '../../../../org/bukkit/Raid.js';
import RaidEvent from './RaidEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface RaidTriggerEvent extends RaidEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getRaid(): Raid;
    getWorld(): World;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class RaidTriggerEvent {
    static get $javaClass(): any;
    constructor(raid: Raid, world: World, player: Player);
    static getHandlerList(): HandlerList;
}
