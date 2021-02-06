export default class Stairs {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Stairs');
    }
    static $isInstance(obj) {
        return obj instanceof Stairs.$javaClass;
    }
}
