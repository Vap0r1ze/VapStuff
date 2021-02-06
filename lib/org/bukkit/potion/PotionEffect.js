export default class PotionEffect {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionEffect');
    }
    static $isInstance(obj) {
        return obj instanceof PotionEffect.$javaClass;
    }
    constructor(...args) {
        return new PotionEffect.$javaClass(...args);
    }
}
