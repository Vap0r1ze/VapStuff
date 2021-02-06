export default class ShulkerBox {
    static get $javaClass() {
        return Java.type('org.bukkit.block.ShulkerBox');
    }
    static $isInstance(obj) {
        return obj instanceof ShulkerBox.$javaClass;
    }
}
