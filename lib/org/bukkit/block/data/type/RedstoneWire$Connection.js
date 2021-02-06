export default class RedstoneWire$Connection {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.RedstoneWire$Connection');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneWire$Connection.$javaClass;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
    static get SIDE() {
        return this.$javaClass.SIDE;
    }
    static get UP() {
        return this.$javaClass.UP;
    }
}
