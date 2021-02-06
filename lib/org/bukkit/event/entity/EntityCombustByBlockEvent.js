export default class EntityCombustByBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityCombustByBlockEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityCombustByBlockEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityCombustByBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityCombustByBlockEvent.$javaClass.getHandlerList(...args);
    }
}
