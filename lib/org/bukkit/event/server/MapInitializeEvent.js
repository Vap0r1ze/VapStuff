export default class MapInitializeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.MapInitializeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof MapInitializeEvent.$javaClass;
    }
    constructor(...args) {
        return new MapInitializeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return MapInitializeEvent.$javaClass.getHandlerList(...args);
    }
}
