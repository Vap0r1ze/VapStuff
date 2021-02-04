import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryEvent from './InventoryEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
export default interface InventoryCloseEvent extends InventoryEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getPlayer(): HumanEntity;
    getView(): InventoryView;
    getViewers(): Array<HumanEntity>;
    isAsynchronous(): boolean;
}
export default class InventoryCloseEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
