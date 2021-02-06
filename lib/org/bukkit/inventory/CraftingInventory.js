export default class CraftingInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CraftingInventory');
    }
    static $isInstance(obj) {
        return obj instanceof CraftingInventory.$javaClass;
    }
}
