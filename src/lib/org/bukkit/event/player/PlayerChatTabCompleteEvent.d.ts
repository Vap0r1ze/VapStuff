import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerChatTabCompleteEvent extends PlayerEvent {
    getChatMessage(): string;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLastToken(): string;
    getPlayer(): Player;
    getTabCompletions(): Array<string>;
    isAsynchronous(): boolean;
}
export default class PlayerChatTabCompleteEvent {
    static get $javaClass(): any;
    constructor(who: Player, message: string, completions: Array<any>);
    static getHandlerList(): HandlerList;
}
