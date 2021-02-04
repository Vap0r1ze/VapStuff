import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockDropItemEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getBlockState(): BlockState;
    getEventName(): string;
    getHandlers(): HandlerList;
    getItems(): Array<Item>;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BlockDropItemEvent {
    static get $javaClass(): any;
    constructor(block: Block, blockState: BlockState, player: Player, items: Array<any>);
    static getHandlerList(): HandlerList;
}
