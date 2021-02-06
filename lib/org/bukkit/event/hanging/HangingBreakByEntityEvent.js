export default class HangingBreakByEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.hanging.HangingBreakByEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof HangingBreakByEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new HangingBreakByEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return HangingBreakByEntityEvent.$javaClass.getHandlerList(...args);
    }
}
