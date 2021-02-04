import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerMoveEvent from './PlayerMoveEvent.js';
import PlayerTeleportEvent$TeleportCause from './PlayerTeleportEvent$TeleportCause.js';
export default interface PlayerTeleportEvent extends PlayerMoveEvent {
    getCause(): PlayerTeleportEvent$TeleportCause;
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
export default class PlayerTeleportEvent {
    static get $javaClass(): any;
    constructor(player: Player, from: Location, to: Location);
    constructor(player: Player, from: Location, to: Location, cause: PlayerTeleportEvent$TeleportCause);
    static getHandlerList(): HandlerList;
}
