export default class CommandSender$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandSender$Spigot');
    }
    constructor(...args) {
        return new CommandSender$Spigot.$javaClass(...args);
    }
}
