"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScriptEngineMain {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.ScriptEngineMain');
    }
    static $isInstance(obj) {
        return obj instanceof ScriptEngineMain.$javaClass;
    }
    constructor(...args) {
        return new ScriptEngineMain.$javaClass(...args);
    }
    static access$getScriptEngines$cp(...args) {
        return ScriptEngineMain.$javaClass.access$getScriptEngines$cp(...args);
    }
    static getAllScriptEngines(...args) {
        return ScriptEngineMain.$javaClass.getAllScriptEngines(...args);
    }
    static getPlugin(...args) {
        return ScriptEngineMain.$javaClass.getPlugin(...args);
    }
    static getProvidingPlugin(...args) {
        return ScriptEngineMain.$javaClass.getProvidingPlugin(...args);
    }
    static registerScriptEngine(...args) {
        return ScriptEngineMain.$javaClass.registerScriptEngine(...args);
    }
    static releaseScriptEngine(...args) {
        return ScriptEngineMain.$javaClass.releaseScriptEngine(...args);
    }
    static reloadAllScriptEngines(...args) {
        return ScriptEngineMain.$javaClass.reloadAllScriptEngines(...args);
    }
    static reloadScriptEngine$default(...args) {
        return ScriptEngineMain.$javaClass.reloadScriptEngine$default(...args);
    }
    static resolveScriptEngine(...args) {
        return ScriptEngineMain.$javaClass.resolveScriptEngine(...args);
    }
    static versionCheck$default(...args) {
        return ScriptEngineMain.$javaClass.versionCheck$default(...args);
    }
}
exports.default = ScriptEngineMain;
