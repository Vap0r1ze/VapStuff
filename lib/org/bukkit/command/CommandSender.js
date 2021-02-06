export default class CommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof CommandSender.$javaClass;
    }
}
