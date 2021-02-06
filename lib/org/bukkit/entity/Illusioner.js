export default class Illusioner {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Illusioner');
    }
    static $isInstance(obj) {
        return obj instanceof Illusioner.$javaClass;
    }
}
