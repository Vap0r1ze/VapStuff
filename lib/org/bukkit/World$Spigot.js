export default class World$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.World$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof World$Spigot.$javaClass;
    }
    constructor(...args) {
        return new World$Spigot.$javaClass(...args);
    }
}
