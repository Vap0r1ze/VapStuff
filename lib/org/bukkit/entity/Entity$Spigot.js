export default class Entity$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Entity$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof Entity$Spigot.$javaClass;
    }
    constructor(...args) {
        return new Entity$Spigot.$javaClass(...args);
    }
}
