import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerCommandSendEvent extends PlayerEvent {
    getCommands(): Array<string>;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerCommandSendEvent {
    static get $javaClass(): any;
    constructor(player: Player, commands: Array<any>);
    static getHandlerList(): HandlerList;
}
