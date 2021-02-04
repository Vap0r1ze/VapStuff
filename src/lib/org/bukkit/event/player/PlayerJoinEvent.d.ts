import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerJoinEvent extends PlayerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getJoinMessage(): string;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    setJoinMessage(joinMessage: string): void;
}
export default class PlayerJoinEvent {
    static get $javaClass(): any;
    constructor(playerJoined: Player, joinMessage: string);
    static getHandlerList(): HandlerList;
}
