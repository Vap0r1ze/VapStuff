export default class ProxiedCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.ProxiedCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof ProxiedCommandSender.$javaClass;
    }
}
