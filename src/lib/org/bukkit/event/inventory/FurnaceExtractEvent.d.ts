import Block from '../../../../org/bukkit/block/Block.js';
import BlockExpEvent from '../../../../org/bukkit/event/block/BlockExpEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface FurnaceExtractEvent extends BlockExpEvent {
    getBlock(): Block;
    getEventName(): string;
    getExpToDrop(): number;
    getHandlers(): HandlerList;
    getItemAmount(): number;
    getItemType(): Material;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    setExpToDrop(exp: number): void;
}
export default class FurnaceExtractEvent {
    static get $javaClass(): any;
    constructor(player: Player, block: Block, itemType: Material, itemAmount: number, exp: number);
    static getHandlerList(): HandlerList;
}
