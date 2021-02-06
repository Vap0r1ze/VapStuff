export default class EnderDragonChangePhaseEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EnderDragonChangePhaseEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EnderDragonChangePhaseEvent.$javaClass;
    }
    constructor(...args) {
        return new EnderDragonChangePhaseEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EnderDragonChangePhaseEvent.$javaClass.getHandlerList(...args);
    }
}
