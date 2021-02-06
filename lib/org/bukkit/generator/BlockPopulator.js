export default class BlockPopulator {
    static get $javaClass() {
        return Java.type('org.bukkit.generator.BlockPopulator');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPopulator.$javaClass;
    }
    constructor(...args) {
        return new BlockPopulator.$javaClass(...args);
    }
}
