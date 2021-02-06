export default class PlayerSwapHandItemsEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerSwapHandItemsEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerSwapHandItemsEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerSwapHandItemsEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerSwapHandItemsEvent.$javaClass.getHandlerList(...args);
    }
}
