export default class EntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityEvent.$javaClass(...args);
    }
}
