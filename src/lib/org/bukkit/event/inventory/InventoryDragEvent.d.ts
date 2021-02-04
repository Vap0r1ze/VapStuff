import DragType from './DragType.js';
import Event$Result from '../../../../org/bukkit/event/Event$Result.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import HumanEntity from '../../../../org/bukkit/entity/HumanEntity.js';
import Inventory from '../../../../org/bukkit/inventory/Inventory.js';
import InventoryInteractEvent from './InventoryInteractEvent.js';
import InventoryView from '../../../../org/bukkit/inventory/InventoryView.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface InventoryDragEvent extends InventoryInteractEvent {
    getCursor(): ItemStack;
    getEventName(): string;
    getHandlers(): HandlerList;
    getInventory(): Inventory;
    getInventorySlots(): any;
    getNewItems(): any;
    getOldCursor(): ItemStack;
    getRawSlots(): any;
    getResult(): Event$Result;
    getType(): DragType;
    getView(): InventoryView;
    getViewers(): Array<HumanEntity>;
    getWhoClicked(): HumanEntity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(toCancel: boolean): void;
    setCursor(newCursor: ItemStack): void;
    setResult(newResult: Event$Result): void;
}
export default class InventoryDragEvent {
    static get $javaClass(): any;
    constructor(what: InventoryView, newCursor: ItemStack, oldCursor: ItemStack, right: boolean, slots: any);
    static getHandlerList(): HandlerList;
}
