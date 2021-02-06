export default class PlayerLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLevelChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerLevelChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
