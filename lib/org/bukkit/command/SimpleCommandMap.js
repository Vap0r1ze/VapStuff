export default class SimpleCommandMap {
    static get $javaClass() {
        return Java.type('org.bukkit.command.SimpleCommandMap');
    }
    static $isInstance(obj) {
        return obj instanceof SimpleCommandMap.$javaClass;
    }
    constructor(...args) {
        return new SimpleCommandMap.$javaClass(...args);
    }
}
