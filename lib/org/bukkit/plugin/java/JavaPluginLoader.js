export default class JavaPluginLoader {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.java.JavaPluginLoader');
    }
    static $isInstance(obj) {
        return obj instanceof JavaPluginLoader.$javaClass;
    }
    constructor(...args) {
        return new JavaPluginLoader.$javaClass(...args);
    }
    static get pluginParentTimer() {
        return JavaPluginLoader.$javaClass.pluginParentTimer;
    }
}
