export default class Player$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Player$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof Player$Spigot.$javaClass;
    }
    constructor(...args) {
        return new Player$Spigot.$javaClass(...args);
    }
}
