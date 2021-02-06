export default class EntityDropItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDropItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityDropItemEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityDropItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDropItemEvent.$javaClass.getHandlerList(...args);
    }
}
