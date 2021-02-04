import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from './WorldEvent.js';
export default interface SpawnChangeEvent extends WorldEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPreviousLocation(): Location;
    getWorld(): World;
    isAsynchronous(): boolean;
}
export default class SpawnChangeEvent {
    static get $javaClass(): any;
    constructor(world: World, previousLocation: Location);
    static getHandlerList(): HandlerList;
}
