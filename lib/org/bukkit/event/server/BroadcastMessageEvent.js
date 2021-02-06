export default class BroadcastMessageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.BroadcastMessageEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BroadcastMessageEvent.$javaClass;
    }
    constructor(...args) {
        return new BroadcastMessageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BroadcastMessageEvent.$javaClass.getHandlerList(...args);
    }
}
