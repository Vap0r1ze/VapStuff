export default class Stray {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Stray');
    }
    static $isInstance(obj) {
        return obj instanceof Stray.$javaClass;
    }
}
