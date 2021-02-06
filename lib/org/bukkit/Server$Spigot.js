export default class Server$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.Server$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof Server$Spigot.$javaClass;
    }
    constructor(...args) {
        return new Server$Spigot.$javaClass(...args);
    }
}
