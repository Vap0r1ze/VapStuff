export default class WorldInitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldInitEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WorldInitEvent.$javaClass;
    }
    constructor(...args) {
        return new WorldInitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldInitEvent.$javaClass.getHandlerList(...args);
    }
}
