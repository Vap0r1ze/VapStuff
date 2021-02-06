export default class BlockPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPlaceEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPlaceEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
