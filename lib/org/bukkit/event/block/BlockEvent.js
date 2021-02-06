export default class BlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockEvent.$javaClass(...args);
    }
}
