export default class Salmon {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Salmon');
    }
    static $isInstance(obj) {
        return obj instanceof Salmon.$javaClass;
    }
}
