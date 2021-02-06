export default class Snowable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Snowable');
    }
    static $isInstance(obj) {
        return obj instanceof Snowable.$javaClass;
    }
}
