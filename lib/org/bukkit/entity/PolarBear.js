export default class PolarBear {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.PolarBear');
    }
    static $isInstance(obj) {
        return obj instanceof PolarBear.$javaClass;
    }
}
