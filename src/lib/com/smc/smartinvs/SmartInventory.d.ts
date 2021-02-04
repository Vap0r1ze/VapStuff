import ClickableItem from '../../../fr/minuskube/inv/ClickableItem.js';
import InventoryManager from '../../../fr/minuskube/inv/InventoryManager.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import SmartInventory$Builder from '../../../fr/minuskube/inv/SmartInventory$Builder.js';
import SmartInventoryProvider from './SmartInventoryProvider.js';
export default class SmartInventory {
    static get $javaClass(): any;
    constructor();
    static builder(inventoryManager: InventoryManager): SmartInventory$Builder;
    static clickableItem(item: ItemStack): ClickableItem;
    static clickableItem(item: ItemStack, consumer: any): ClickableItem;
    static provider(scriptableObject: any): SmartInventoryProvider;
}
