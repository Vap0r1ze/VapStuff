export default class SmartInventory {
    static get $javaClass() {
        return Java.type('com.smc.smartinvs.SmartInventory');
    }
    constructor(...args) {
        return new SmartInventory.$javaClass(...args);
    }
    static builder(...args) {
        return SmartInventory.$javaClass.builder(...args);
    }
    static clickableItem(...args) {
        return SmartInventory.$javaClass.clickableItem(...args);
    }
    static provider(...args) {
        return SmartInventory.$javaClass.provider(...args);
    }
}
