export default class BrewEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.BrewEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BrewEvent.$javaClass;
    }
    constructor(...args) {
        return new BrewEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BrewEvent.$javaClass.getHandlerList(...args);
    }
}
