export default class RedstoneWire {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.RedstoneWire');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneWire.$javaClass;
    }
}
