export default class Creeper {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Creeper');
    }
    static $isInstance(obj) {
        return obj instanceof Creeper.$javaClass;
    }
}
