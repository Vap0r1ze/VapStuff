export default class Plugin {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.Plugin');
    }
    static $isInstance(obj) {
        return obj instanceof Plugin.$javaClass;
    }
}
