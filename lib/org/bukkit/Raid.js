export default class Raid {
    static get $javaClass() {
        return Java.type('org.bukkit.Raid');
    }
    static $isInstance(obj) {
        return obj instanceof Raid.$javaClass;
    }
}
