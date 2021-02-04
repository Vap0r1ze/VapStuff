import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
import PlayerLoginEvent$Result from './PlayerLoginEvent$Result.js';
export default interface PlayerLoginEvent extends PlayerEvent {
    allow(): void;
    disallow(result: PlayerLoginEvent$Result, message: string): void;
    getAddress(): any;
    getEventName(): string;
    getHandlers(): HandlerList;
    getHostname(): string;
    getKickMessage(): string;
    getPlayer(): Player;
    getRealAddress(): any;
    getResult(): PlayerLoginEvent$Result;
    isAsynchronous(): boolean;
    setKickMessage(message: string): void;
    setResult(result: PlayerLoginEvent$Result): void;
}
export default class PlayerLoginEvent {
    static get $javaClass(): any;
    constructor(player: Player, hostname: string, address: any);
    constructor(player: Player, hostname: string, address: any, realAddress: any);
    constructor(player: Player, hostname: string, address: any, result: PlayerLoginEvent$Result, message: string, realAddress: any);
    static getHandlerList(): HandlerList;
}
