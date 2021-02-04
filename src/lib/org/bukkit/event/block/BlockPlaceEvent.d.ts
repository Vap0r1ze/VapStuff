import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import EquipmentSlot from '../../../../org/bukkit/inventory/EquipmentSlot.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockPlaceEvent extends BlockEvent, Cancellable {
    canBuild(): boolean;
    getBlock(): Block;
    getBlockAgainst(): Block;
    getBlockPlaced(): Block;
    getBlockReplacedState(): BlockState;
    getEventName(): string;
    getHand(): EquipmentSlot;
    getHandlers(): HandlerList;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setBuild(canBuild: boolean): void;
    setCancelled(cancel: boolean): void;
}
export default class BlockPlaceEvent {
    static get $javaClass(): any;
    constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean);
    constructor(placedBlock: Block, replacedBlockState: BlockState, placedAgainst: Block, itemInHand: ItemStack, thePlayer: Player, canBuild: boolean, hand: EquipmentSlot);
    static getHandlerList(): HandlerList;
}
