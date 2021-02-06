export default class EntityTransformEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTransformEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityTransformEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityTransformEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTransformEvent.$javaClass.getHandlerList(...args);
    }
}
