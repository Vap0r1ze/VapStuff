import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
export default interface WorldEvent extends Event {
    getEventName(): string;
    getHandlers(): HandlerList;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class WorldEvent {
    static get $javaClass(): any;
    constructor(world: World);
}
