import Block from '../../../../org/bukkit/block/Block.js';
import BlockExpEvent from './BlockExpEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockBreakEvent extends BlockExpEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getExpToDrop(): number;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isDropItems(): boolean;
    setCancelled(cancel: boolean): void;
    setDropItems(dropItems: boolean): void;
    setExpToDrop(exp: number): void;
}
export default class BlockBreakEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, player: Player);
    static getHandlerList(): HandlerList;
}
