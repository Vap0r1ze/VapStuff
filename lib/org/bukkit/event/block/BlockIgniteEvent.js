export default class BlockIgniteEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockIgniteEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockIgniteEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockIgniteEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockIgniteEvent.$javaClass.getHandlerList(...args);
    }
}
