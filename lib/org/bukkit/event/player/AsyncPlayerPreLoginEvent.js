export default class AsyncPlayerPreLoginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent');
    }
    static $isInstance(obj) {
        return obj instanceof AsyncPlayerPreLoginEvent.$javaClass;
    }
    constructor(...args) {
        return new AsyncPlayerPreLoginEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return AsyncPlayerPreLoginEvent.$javaClass.getHandlerList(...args);
    }
}
