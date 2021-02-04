import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerMoveEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getFrom(): Location;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getTo(): Location;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFrom(from: Location): void;
    setTo(to: Location): void;
}
export default class PlayerMoveEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}
