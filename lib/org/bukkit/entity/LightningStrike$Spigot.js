export default class LightningStrike$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LightningStrike$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof LightningStrike$Spigot.$javaClass;
    }
    constructor(...args) {
        return new LightningStrike$Spigot.$javaClass(...args);
    }
}
