export default class ServerCommandEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerCommandEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServerCommandEvent.$javaClass;
    }
    constructor(...args) {
        return new ServerCommandEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ServerCommandEvent.$javaClass.getHandlerList(...args);
    }
}
