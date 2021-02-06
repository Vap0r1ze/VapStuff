export default class PortalCreateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.PortalCreateEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PortalCreateEvent.$javaClass;
    }
    constructor(...args) {
        return new PortalCreateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PortalCreateEvent.$javaClass.getHandlerList(...args);
    }
}
