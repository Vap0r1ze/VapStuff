export default class BlockBreakEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockBreakEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockBreakEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockBreakEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockBreakEvent.$javaClass.getHandlerList(...args);
    }
}
