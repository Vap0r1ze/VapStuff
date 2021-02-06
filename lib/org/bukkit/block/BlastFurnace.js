export default class BlastFurnace {
    static get $javaClass() {
        return Java.type('org.bukkit.block.BlastFurnace');
    }
    static $isInstance(obj) {
        return obj instanceof BlastFurnace.$javaClass;
    }
}
