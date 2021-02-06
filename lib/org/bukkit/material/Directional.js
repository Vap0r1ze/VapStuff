export default class Directional {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Directional');
    }
    static $isInstance(obj) {
        return obj instanceof Directional.$javaClass;
    }
}
