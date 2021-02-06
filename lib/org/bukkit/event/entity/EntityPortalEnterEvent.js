export default class EntityPortalEnterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPortalEnterEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPortalEnterEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityPortalEnterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPortalEnterEvent.$javaClass.getHandlerList(...args);
    }
}
