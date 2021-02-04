import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerLevelChangeEvent extends PlayerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewLevel(): number;
    getOldLevel(): number;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerLevelChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, oldLevel: number, newLevel: number);
    static getHandlerList(): HandlerList;
}
