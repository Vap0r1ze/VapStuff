export default class BlockCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.BlockCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof BlockCommandSender.$javaClass;
    }
}
