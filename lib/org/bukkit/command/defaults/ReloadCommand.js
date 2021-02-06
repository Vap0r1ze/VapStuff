export default class ReloadCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.ReloadCommand');
    }
    static $isInstance(obj) {
        return obj instanceof ReloadCommand.$javaClass;
    }
    constructor(...args) {
        return new ReloadCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return ReloadCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
