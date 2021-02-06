export default class PlayerCommandSendEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerCommandSendEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerCommandSendEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerCommandSendEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerCommandSendEvent.$javaClass.getHandlerList(...args);
    }
}
