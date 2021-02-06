export default class EntityAirChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityAirChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityAirChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityAirChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityAirChangeEvent.$javaClass.getHandlerList(...args);
    }
}
