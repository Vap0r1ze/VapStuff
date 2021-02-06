export default class EntityPickupItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPickupItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPickupItemEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityPickupItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPickupItemEvent.$javaClass.getHandlerList(...args);
    }
}
