export default class EnderChest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.EnderChest');
    }
    static $isInstance(obj) {
        return obj instanceof EnderChest.$javaClass;
    }
}
