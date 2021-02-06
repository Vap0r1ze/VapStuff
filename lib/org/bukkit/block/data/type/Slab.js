export default class Slab {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Slab');
    }
    static $isInstance(obj) {
        return obj instanceof Slab.$javaClass;
    }
}
