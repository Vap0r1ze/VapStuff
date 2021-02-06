export default class EntityTameEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTameEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityTameEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityTameEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTameEvent.$javaClass.getHandlerList(...args);
    }
}
