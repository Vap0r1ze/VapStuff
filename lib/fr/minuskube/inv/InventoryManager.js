export default class InventoryManager {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.InventoryManager');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryManager.$javaClass;
    }
    constructor(...args) {
        return new InventoryManager.$javaClass(...args);
    }
}
