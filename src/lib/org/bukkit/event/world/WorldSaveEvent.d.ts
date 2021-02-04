import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from './WorldEvent.js';
export default interface WorldSaveEvent extends WorldEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class WorldSaveEvent {
    static get $javaClass(): any;
    constructor(world: World);
    static getHandlerList(): HandlerList;
}
