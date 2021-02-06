export default class Rabbit {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Rabbit');
    }
    static $isInstance(obj) {
        return obj instanceof Rabbit.$javaClass;
    }
}
