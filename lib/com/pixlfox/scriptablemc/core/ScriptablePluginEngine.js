export default class ScriptablePluginEngine {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
    }
    constructor(...args) {
        return new ScriptablePluginEngine.$javaClass(...args);
    }
    static access$getPreLoadClasses$cp(...args) {
        return ScriptablePluginEngine.$javaClass.access$getPreLoadClasses$cp(...args);
    }
}
