export default class InventoryContents {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.InventoryContents');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryContents.$javaClass;
    }
}
