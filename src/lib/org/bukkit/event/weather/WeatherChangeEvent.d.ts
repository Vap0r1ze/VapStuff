import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import WeatherEvent from './WeatherEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface WeatherChangeEvent extends WeatherEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getWorld(): World;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    toWeatherState(): boolean;
}
export default class WeatherChangeEvent {
    static get $javaClass(): any;
    constructor(world: World, to: boolean);
    static getHandlerList(): HandlerList;
}
