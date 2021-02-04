export default class Player$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Player$Spigot');
    }
    constructor(...args) {
        return new Player$Spigot.$javaClass(...args);
    }
}
