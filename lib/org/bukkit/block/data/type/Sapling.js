export default class Sapling {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Sapling');
    }
    static $isInstance(obj) {
        return obj instanceof Sapling.$javaClass;
    }
}
