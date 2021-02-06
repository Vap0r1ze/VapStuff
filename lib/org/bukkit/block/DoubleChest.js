export default class DoubleChest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.DoubleChest');
    }
    static $isInstance(obj) {
        return obj instanceof DoubleChest.$javaClass;
    }
    constructor(...args) {
        return new DoubleChest.$javaClass(...args);
    }
}
