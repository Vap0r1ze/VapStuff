export default class BlockPistonEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPistonEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPistonEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockPistonEvent.$javaClass(...args);
    }
}
