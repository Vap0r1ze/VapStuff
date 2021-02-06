export default class ConsoleCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.ConsoleCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof ConsoleCommandSender.$javaClass;
    }
}
