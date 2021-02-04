import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import GameMode from '../../../../org/bukkit/GameMode.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewGameMode(): GameMode;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerGameModeChangeEvent {
    static get $javaClass(): any;
    constructor(player: Player, newGameMode: GameMode);
    static getHandlerList(): HandlerList;
}
