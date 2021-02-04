import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js';
import LightningStrikeEvent$Cause from './LightningStrikeEvent$Cause.js';
import WeatherEvent from './WeatherEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface LightningStrikeEvent extends WeatherEvent, Cancellable {
    getCause(): LightningStrikeEvent$Cause;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLightning(): LightningStrike;
    getWorld(): World;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class LightningStrikeEvent {
    static get $javaClass(): any;
    constructor(world: World, bolt: LightningStrike);
    constructor(world: World, bolt: LightningStrike, cause: LightningStrikeEvent$Cause);
    static getHandlerList(): HandlerList;
}
