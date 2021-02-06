export default class Furnace {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Furnace');
    }
    static $isInstance(obj) {
        return obj instanceof Furnace.$javaClass;
    }
}
