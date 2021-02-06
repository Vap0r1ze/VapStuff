export default class BlockGrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockGrowEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockGrowEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockGrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockGrowEvent.$javaClass.getHandlerList(...args);
    }
}
