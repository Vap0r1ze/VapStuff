import Inventory from './Inventory.js';
export default interface InventoryHolder {
    getInventory(): Inventory;
}
export default class InventoryHolder {
    static get $javaClass(): any;
}
