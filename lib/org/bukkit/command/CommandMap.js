export default class CommandMap {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandMap');
    }
    static $isInstance(obj) {
        return obj instanceof CommandMap.$javaClass;
    }
}
