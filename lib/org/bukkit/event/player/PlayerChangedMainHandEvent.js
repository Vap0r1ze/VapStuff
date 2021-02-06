export default class PlayerChangedMainHandEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChangedMainHandEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerChangedMainHandEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerChangedMainHandEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChangedMainHandEvent.$javaClass.getHandlerList(...args);
    }
}
