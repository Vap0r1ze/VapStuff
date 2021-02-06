export default class ThrownExpBottle {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ThrownExpBottle');
    }
    static $isInstance(obj) {
        return obj instanceof ThrownExpBottle.$javaClass;
    }
}
