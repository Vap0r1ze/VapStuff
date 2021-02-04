import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
import PlayerResourcePackStatusEvent$Status from './PlayerResourcePackStatusEvent$Status.js';
export default interface PlayerResourcePackStatusEvent extends PlayerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getStatus(): PlayerResourcePackStatusEvent$Status;
    isAsynchronous(): boolean;
}
export default class PlayerResourcePackStatusEvent {
    static get $javaClass(): any;
    constructor(who: Player, resourcePackStatus: PlayerResourcePackStatusEvent$Status);
    static getHandlerList(): HandlerList;
}
