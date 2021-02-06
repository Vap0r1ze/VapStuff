export default class PluginIdentifiableCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.PluginIdentifiableCommand');
    }
    static $isInstance(obj) {
        return obj instanceof PluginIdentifiableCommand.$javaClass;
    }
}
