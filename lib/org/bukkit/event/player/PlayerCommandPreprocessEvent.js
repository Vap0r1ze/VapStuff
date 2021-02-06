export default class PlayerCommandPreprocessEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerCommandPreprocessEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerCommandPreprocessEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerCommandPreprocessEvent.$javaClass.getHandlerList(...args);
    }
}
