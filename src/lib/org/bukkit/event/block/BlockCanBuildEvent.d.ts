import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from './BlockEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockCanBuildEvent extends BlockEvent {
    getBlock(): Block;
    getBlockData(): BlockData;
    getEventName(): string;
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isBuildable(): boolean;
    setBuildable(cancel: boolean): void;
}
export default class BlockCanBuildEvent {
    static get $javaClass(): any;
    constructor(block: Block, type: BlockData, canBuild: boolean);
    constructor(block: Block, player: Player, type: BlockData, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
