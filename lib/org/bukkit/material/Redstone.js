export default class Redstone {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Redstone');
    }
    static $isInstance(obj) {
        return obj instanceof Redstone.$javaClass;
    }
}
