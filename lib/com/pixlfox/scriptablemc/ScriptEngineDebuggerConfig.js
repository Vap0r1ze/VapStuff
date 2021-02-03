export default class ScriptEngineDebuggerConfig {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.ScriptEngineDebuggerConfig');
    }
    constructor(...args) {
        return new ScriptEngineDebuggerConfig.$javaClass(...args);
    }
}
