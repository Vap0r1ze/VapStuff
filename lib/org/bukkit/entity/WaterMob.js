export default class WaterMob {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WaterMob');
    }
    static $isInstance(obj) {
        return obj instanceof WaterMob.$javaClass;
    }
}
