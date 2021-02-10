"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScriptablePluginContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginContext');
    }
    static $isInstance(obj) {
        return obj instanceof ScriptablePluginContext.$javaClass;
    }
    constructor(...args) {
        return new ScriptablePluginContext.$javaClass(...args);
    }
}
exports.default = ScriptablePluginContext;
