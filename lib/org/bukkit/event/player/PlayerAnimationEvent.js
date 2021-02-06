export default class PlayerAnimationEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerAnimationEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerAnimationEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerAnimationEvent.$javaClass.getHandlerList(...args);
    }
}
