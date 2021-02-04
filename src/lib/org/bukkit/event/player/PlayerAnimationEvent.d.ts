import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerAnimationType from './PlayerAnimationType.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerAnimationEvent extends PlayerEvent, Cancellable {
    getAnimationType(): PlayerAnimationType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerAnimationEvent {
    static get $javaClass(): any;
    constructor(player: Player);
    static getHandlerList(): HandlerList;
}
