export default class EntityDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDamageEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityDamageEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDamageEvent.$javaClass.getHandlerList(...args);
    }
}
