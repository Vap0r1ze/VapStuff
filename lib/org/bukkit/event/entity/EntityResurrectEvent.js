export default class EntityResurrectEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityResurrectEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityResurrectEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityResurrectEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityResurrectEvent.$javaClass.getHandlerList(...args);
    }
}
