export default class SeaPickle {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.SeaPickle');
    }
    static $isInstance(obj) {
        return obj instanceof SeaPickle.$javaClass;
    }
}
