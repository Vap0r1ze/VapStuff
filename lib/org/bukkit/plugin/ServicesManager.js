export default class ServicesManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.ServicesManager');
    }
    static $isInstance(obj) {
        return obj instanceof ServicesManager.$javaClass;
    }
}
