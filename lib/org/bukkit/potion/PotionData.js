export default class PotionData {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionData');
    }
    static $isInstance(obj) {
        return obj instanceof PotionData.$javaClass;
    }
    constructor(...args) {
        return new PotionData.$javaClass(...args);
    }
}
