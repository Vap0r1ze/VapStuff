export default class RedstoneWallTorch {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.RedstoneWallTorch');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneWallTorch.$javaClass;
    }
}
