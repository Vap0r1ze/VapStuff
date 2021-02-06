export default class Mule {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Mule');
    }
    static $isInstance(obj) {
        return obj instanceof Mule.$javaClass;
    }
}
