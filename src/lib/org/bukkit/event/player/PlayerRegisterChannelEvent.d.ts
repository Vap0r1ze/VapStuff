import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerChannelEvent from './PlayerChannelEvent.js';
export default interface PlayerRegisterChannelEvent extends PlayerChannelEvent {
    getChannel(): string;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerRegisterChannelEvent {
    static get $javaClass(): any;
    constructor(player: Player, channel: string);
    static getHandlerList(): HandlerList;
}
