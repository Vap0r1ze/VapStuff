export default class Parrot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Parrot');
    }
    static $isInstance(obj) {
        return obj instanceof Parrot.$javaClass;
    }
}
