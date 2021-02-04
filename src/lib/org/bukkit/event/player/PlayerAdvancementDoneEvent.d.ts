import Advancement from '../../../../org/bukkit/advancement/Advancement.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerAdvancementDoneEvent extends PlayerEvent {
    getAdvancement(): Advancement;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerAdvancementDoneEvent {
    static get $javaClass(): any;
    constructor(who: Player, advancement: Advancement);
    static getHandlerList(): HandlerList;
}
