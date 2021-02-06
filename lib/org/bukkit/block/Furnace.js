export default class Furnace {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Furnace');
    }
    static $isInstance(obj) {
        return obj instanceof Furnace.$javaClass;
    }
}
