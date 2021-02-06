export default class PlayerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerEvent.$javaClass(...args);
    }
}
