export default class Entity$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Entity$Spigot');
    }
    constructor(...args) {
        return new Entity$Spigot.$javaClass(...args);
    }
}
