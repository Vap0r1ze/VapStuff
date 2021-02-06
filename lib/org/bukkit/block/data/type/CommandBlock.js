export default class CommandBlock {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.CommandBlock');
    }
    static $isInstance(obj) {
        return obj instanceof CommandBlock.$javaClass;
    }
}
