import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerLocaleChangeEvent extends PlayerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getLocale(): string;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerLocaleChangeEvent {
    static get $javaClass(): any;
    constructor(who: Player, locale: string);
    static getHandlerList(): HandlerList;
}
