export default class ScriptEngineConfig {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.ScriptEngineConfig');
    }
    static $isInstance(obj) {
        return obj instanceof ScriptEngineConfig.$javaClass;
    }
    constructor(...args) {
        return new ScriptEngineConfig.$javaClass(...args);
    }
    static readConfigBoolean$default(...args) {
        return ScriptEngineConfig.$javaClass.readConfigBoolean$default(...args);
    }
    static readConfigString$default(...args) {
        return ScriptEngineConfig.$javaClass.readConfigString$default(...args);
    }
    static readConfigStringList$default(...args) {
        return ScriptEngineConfig.$javaClass.readConfigStringList$default(...args);
    }
}
