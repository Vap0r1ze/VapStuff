import Block from '../../../../org/bukkit/block/Block.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerBedEnterEvent$BedEnterResult from './PlayerBedEnterEvent$BedEnterResult.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerBedEnterEvent extends PlayerEvent, Cancellable {
    getBed(): Block;
    getBedEnterResult(): PlayerBedEnterEvent$BedEnterResult;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setUseBed(useBed: Event$Result): void;
    useBed(): Event$Result;
}
export default class PlayerBedEnterEvent {
    static get $javaClass(): any;
    constructor(who: Player, bed: Block);
    constructor(who: Player, bed: Block, bedEnterResult: PlayerBedEnterEvent$BedEnterResult);
    static getHandlerList(): HandlerList;
}
