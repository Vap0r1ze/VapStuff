export default class PlayerChangedWorldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChangedWorldEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerChangedWorldEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerChangedWorldEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChangedWorldEvent.$javaClass.getHandlerList(...args);
    }
}
