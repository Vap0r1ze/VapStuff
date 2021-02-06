export default class LightningStrike {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LightningStrike');
    }
    static $isInstance(obj) {
        return obj instanceof LightningStrike.$javaClass;
    }
}
