export default class EntityCombustEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityCombustEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityCombustEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityCombustEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityCombustEvent.$javaClass.getHandlerList(...args);
    }
}
