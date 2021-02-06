export default class PlayerInteractEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerInteractEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerInteractEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerInteractEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerInteractEntityEvent.$javaClass.getHandlerList(...args);
    }
}
