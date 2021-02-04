import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Hanging from '../../../../org/bukkit/entity/Hanging.js';
import HangingEvent from './HangingEvent.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface HangingPlaceEvent extends HangingEvent, Cancellable {
    getBlock(): Block;
    getBlockFace(): BlockFace;
    getEntity(): Hanging;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class HangingPlaceEvent {
    static get $javaClass(): any;
    constructor(hanging: Hanging, player: Player, block: Block, blockFace: BlockFace);
    static getHandlerList(): HandlerList;
}
