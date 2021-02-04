export default class Server$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.Server$Spigot');
    }
    constructor(...args) {
        return new Server$Spigot.$javaClass(...args);
    }
}
