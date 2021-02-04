import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerRespawnEvent extends PlayerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    getRespawnLocation(): Location;
    isAnchorSpawn(): boolean;
    isAsynchronous(): boolean;
    isBedSpawn(): boolean;
    setRespawnLocation(respawnLocation: Location): void;
}
export default class PlayerRespawnEvent {
    static get $javaClass(): any;
    constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean);
    constructor(respawnPlayer: Player, respawnLocation: Location, isBedSpawn: boolean, isAnchorSpawn: boolean);
    static getHandlerList(): HandlerList;
}
