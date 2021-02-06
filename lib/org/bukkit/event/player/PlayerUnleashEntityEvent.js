export default class PlayerUnleashEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerUnleashEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerUnleashEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerUnleashEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerUnleashEntityEvent.$javaClass.getHandlerList(...args);
    }
}
