export default class EntityRegainHealthEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityRegainHealthEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityRegainHealthEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityRegainHealthEvent.$javaClass.getHandlerList(...args);
    }
}
