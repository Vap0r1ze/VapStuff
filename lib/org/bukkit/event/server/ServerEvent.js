export default class ServerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.ServerEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ServerEvent.$javaClass;
    }
    constructor(...args) {
        return new ServerEvent.$javaClass(...args);
    }
}
