import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
export default interface InventoryEvent extends Event {
    getEventName(): string;
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getView(): InventoryView;
    getViewers(): Array<HumanEntity>;
    isAsynchronous(): boolean;
}
export default class InventoryEvent {
    static get $javaClass(): any;
    constructor(transaction: InventoryView);
    static getHandlerList(): HandlerList;
}
