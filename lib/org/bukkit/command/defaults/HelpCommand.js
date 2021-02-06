export default class HelpCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.HelpCommand');
    }
    static $isInstance(obj) {
        return obj instanceof HelpCommand.$javaClass;
    }
    constructor(...args) {
        return new HelpCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return HelpCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
