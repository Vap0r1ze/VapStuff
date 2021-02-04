import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import TreeType from '../../../../org/bukkit/TreeType.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from './WorldEvent.js';
export default interface StructureGrowEvent extends WorldEvent, Cancellable {
    getBlocks(): Array<BlockState>;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLocation(): Location;
    getPlayer(): Player;
    getSpecies(): TreeType;
    getWorld(): World;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isFromBonemeal(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class StructureGrowEvent {
    static get $javaClass(): any;
    constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: Array<any>);
    static getHandlerList(): HandlerList;
}
