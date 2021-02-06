export default class TropicalFish {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TropicalFish');
    }
    static $isInstance(obj) {
        return obj instanceof TropicalFish.$javaClass;
    }
}
