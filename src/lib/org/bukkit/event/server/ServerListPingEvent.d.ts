import CachedServerIcon from '../../../../org/bukkit/util/CachedServerIcon.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from './ServerEvent.js';
export default interface ServerListPingEvent extends ServerEvent {
    forEach(arg0: any): void;
    getAddress(): any;
    getEventName(): string;
    getHandlers(): HandlerList;
    getMaxPlayers(): number;
    getMotd(): string;
    getNumPlayers(): number;
    isAsynchronous(): boolean;
    iterator(): any;
    setMaxPlayers(maxPlayers: number): void;
    setMotd(motd: string): void;
    setServerIcon(icon: CachedServerIcon): void;
    spliterator(): any;
}
export default class ServerListPingEvent {
    static get $javaClass(): any;
    constructor(address: any, motd: string, numPlayers: number, maxPlayers: number);
    static getHandlerList(): HandlerList;
}
