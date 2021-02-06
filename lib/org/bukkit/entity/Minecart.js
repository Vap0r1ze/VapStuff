export default class Minecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Minecart');
    }
    static $isInstance(obj) {
        return obj instanceof Minecart.$javaClass;
    }
}
