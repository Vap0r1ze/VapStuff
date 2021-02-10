"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScriptablePluginEngine {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.core.ScriptablePluginEngine');
    }
    static $isInstance(obj) {
        return obj instanceof ScriptablePluginEngine.$javaClass;
    }
    constructor(...args) {
        return new ScriptablePluginEngine.$javaClass(...args);
    }
    static access$getPreLoadClasses$cp(...args) {
        return ScriptablePluginEngine.$javaClass.access$getPreLoadClasses$cp(...args);
    }
}
exports.default = ScriptablePluginEngine;
