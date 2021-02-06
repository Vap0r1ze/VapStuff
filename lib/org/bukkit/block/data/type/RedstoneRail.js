export default class RedstoneRail {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.RedstoneRail');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneRail.$javaClass;
    }
}
