export default class Block {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Block');
    }
    static $isInstance(obj) {
        return obj instanceof Block.$javaClass;
    }
}
