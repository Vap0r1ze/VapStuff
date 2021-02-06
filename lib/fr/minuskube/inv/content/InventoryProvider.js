export default class InventoryProvider {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.InventoryProvider');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryProvider.$javaClass;
    }
}
