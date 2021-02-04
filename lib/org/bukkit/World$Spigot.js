export default class World$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.World$Spigot');
    }
    constructor(...args) {
        return new World$Spigot.$javaClass(...args);
    }
}
