export default class Directional {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Directional');
    }
    static $isInstance(obj) {
        return obj instanceof Directional.$javaClass;
    }
}
