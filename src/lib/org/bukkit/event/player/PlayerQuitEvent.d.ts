import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerQuitEvent extends PlayerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getQuitMessage(): string;
    isAsynchronous(): boolean;
    setQuitMessage(quitMessage: string): void;
}
export default class PlayerQuitEvent {
    static get $javaClass(): any;
    constructor(who: Player, quitMessage: string);
    static getHandlerList(): HandlerList;
}
