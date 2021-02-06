export default class TabExecutor {
    static get $javaClass() {
        return Java.type('org.bukkit.command.TabExecutor');
    }
    static $isInstance(obj) {
        return obj instanceof TabExecutor.$javaClass;
    }
}
