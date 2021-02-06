export default class CommandBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.block.CommandBlock');
    }
    static $isInstance(obj) {
        return obj instanceof CommandBlock.$javaClass;
    }
}
