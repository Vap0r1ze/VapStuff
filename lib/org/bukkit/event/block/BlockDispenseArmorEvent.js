export default class BlockDispenseArmorEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDispenseArmorEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockDispenseArmorEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockDispenseArmorEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDispenseArmorEvent.$javaClass.getHandlerList(...args);
    }
}
