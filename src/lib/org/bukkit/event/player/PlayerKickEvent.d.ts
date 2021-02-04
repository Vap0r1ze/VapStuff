import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerKickEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getLeaveMessage(): string;
    getPlayer(): Player;
    getReason(): string;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setLeaveMessage(leaveMessage: string): void;
    setReason(kickReason: string): void;
}
export default class PlayerKickEvent {
    static get $javaClass(): any;
    constructor(playerKicked: Player, kickReason: string, leaveMessage: string);
    static getHandlerList(): HandlerList;
}
