export default class ScriptEngineDebuggerConfig {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.ScriptEngineDebuggerConfig');
    }
    static $isInstance(obj) {
        return obj instanceof ScriptEngineDebuggerConfig.$javaClass;
    }
    constructor(...args) {
        return new ScriptEngineDebuggerConfig.$javaClass(...args);
    }
}
