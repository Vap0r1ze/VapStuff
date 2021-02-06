export default class Command {
    static get $javaClass() {
        return Java.type('org.bukkit.command.Command');
    }
    static $isInstance(obj) {
        return obj instanceof Command.$javaClass;
    }
    static broadcastCommandMessage(...args) {
        return Command.$javaClass.broadcastCommandMessage(...args);
    }
}
