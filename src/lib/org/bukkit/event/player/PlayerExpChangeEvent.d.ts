import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerExpChangeEvent extends PlayerEvent {
    getAmount(): number;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    setAmount(amount: number): void;
}
export default class PlayerExpChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, expAmount: number);
    static getHandlerList(): HandlerList;
}
