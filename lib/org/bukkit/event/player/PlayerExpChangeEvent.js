export default class PlayerExpChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerExpChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerExpChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerExpChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerExpChangeEvent.$javaClass.getHandlerList(...args);
    }
}
