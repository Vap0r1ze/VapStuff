export default class SmartInventory {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.SmartInventory');
    }
    static $isInstance(obj) {
        return obj instanceof SmartInventory.$javaClass;
    }
    static builder(...args) {
        return SmartInventory.$javaClass.builder(...args);
    }
}
