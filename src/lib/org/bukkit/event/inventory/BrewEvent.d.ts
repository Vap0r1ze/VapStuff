import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import BrewerInventory from '../../../../org/bukkit/inventory/BrewerInventory.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BrewEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getContents(): BrewerInventory;
    getEventName(): string;
    getFuelLevel(): number;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BrewEvent {
    static get $javaClass(): any;
    constructor(brewer: Block, contents: BrewerInventory, fuelLevel: number);
    static getHandlerList(): HandlerList;
}
