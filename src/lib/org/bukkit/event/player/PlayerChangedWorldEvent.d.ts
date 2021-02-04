import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
import World from '../../../../org/bukkit/World.js';
export default interface PlayerChangedWorldEvent extends PlayerEvent {
    getEventName(): string;
    getFrom(): World;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerChangedWorldEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: World);
    static getHandlerList(): HandlerList;
}
