export default class Evoker {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Evoker');
    }
    static $isInstance(obj) {
        return obj instanceof Evoker.$javaClass;
    }
}
