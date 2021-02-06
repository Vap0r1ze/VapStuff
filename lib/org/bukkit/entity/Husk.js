export default class Husk {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Husk');
    }
    static $isInstance(obj) {
        return obj instanceof Husk.$javaClass;
    }
}
