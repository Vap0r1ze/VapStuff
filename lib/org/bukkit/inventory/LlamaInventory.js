export default class LlamaInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.LlamaInventory');
    }
    static $isInstance(obj) {
        return obj instanceof LlamaInventory.$javaClass;
    }
}
