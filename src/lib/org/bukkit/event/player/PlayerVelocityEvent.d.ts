import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
import Vector from '../../../../org/bukkit/util/Vector.js';
export default interface PlayerVelocityEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getVelocity(): Vector;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setVelocity(velocity: Vector): void;
}
export default class PlayerVelocityEvent {
    static get $javaClass(): any;
    constructor(player: Player, velocity: Vector);
    static getHandlerList(): HandlerList;
}
