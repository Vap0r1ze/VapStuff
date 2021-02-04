import Egg from '../../../../org/bukkit/entity/Egg.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerEggThrowEvent extends PlayerEvent {
    getEgg(): Egg;
    getEventName(): string;
    getHandlers(): HandlerList;
    getHatchingType(): EntityType;
    getNumHatches(): number;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isHatching(): boolean;
    setHatching(hatching: boolean): void;
    setHatchingType(hatchType: EntityType): void;
    setNumHatches(numHatches: number): void;
}
export default class PlayerEggThrowEvent {
    static get $javaClass(): any;
    constructor(player: Player, egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
    static getHandlerList(): HandlerList;
}
