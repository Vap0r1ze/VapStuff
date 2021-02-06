export default class PlayerPickupItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPickupItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerPickupItemEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerPickupItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPickupItemEvent.$javaClass.getHandlerList(...args);
    }
}
