export default class PluginLoadOrder {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginLoadOrder');
    }
    static get POSTWORLD() {
        return this.$javaClass.POSTWORLD;
    }
    static get STARTUP() {
        return this.$javaClass.STARTUP;
    }
}
