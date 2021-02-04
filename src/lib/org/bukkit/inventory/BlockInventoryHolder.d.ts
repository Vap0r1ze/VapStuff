import Block from '../../../org/bukkit/block/Block.js';
import Inventory from './Inventory.js';
import InventoryHolder from './InventoryHolder.js';
export default interface BlockInventoryHolder extends InventoryHolder {
    getBlock(): Block;
    getInventory(): Inventory;
}
export default class BlockInventoryHolder {
    static get $javaClass(): any;
}
