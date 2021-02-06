export default class PlayerShearEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerShearEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerShearEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerShearEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerShearEntityEvent.$javaClass.getHandlerList(...args);
    }
}
