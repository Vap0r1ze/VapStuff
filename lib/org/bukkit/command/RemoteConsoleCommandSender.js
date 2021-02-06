export default class RemoteConsoleCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.RemoteConsoleCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof RemoteConsoleCommandSender.$javaClass;
    }
}
