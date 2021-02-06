export default class HelpMap {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpMap');
    }
    static $isInstance(obj) {
        return obj instanceof HelpMap.$javaClass;
    }
}
