export default class EntityDamageByEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDamageByEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityDamageByEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityDamageByEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDamageByEntityEvent.$javaClass.getHandlerList(...args);
    }
}
