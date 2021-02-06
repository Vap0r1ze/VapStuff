export default class EntityToggleSwimEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityToggleSwimEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityToggleSwimEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityToggleSwimEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityToggleSwimEvent.$javaClass.getHandlerList(...args);
    }
}
