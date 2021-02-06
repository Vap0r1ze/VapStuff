export default class BlockFromToEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFromToEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockFromToEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockFromToEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFromToEvent.$javaClass.getHandlerList(...args);
    }
}
