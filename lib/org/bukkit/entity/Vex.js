export default class Vex {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Vex');
    }
    static $isInstance(obj) {
        return obj instanceof Vex.$javaClass;
    }
}
