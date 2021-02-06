export default class PlayerItemDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemDamageEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerItemDamageEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerItemDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemDamageEvent.$javaClass.getHandlerList(...args);
    }
}
