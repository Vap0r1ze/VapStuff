import FileConfiguration from '../../../org/bukkit/configuration/file/FileConfiguration.js';
import ScriptEngineDebuggerConfig from './ScriptEngineDebuggerConfig.js';
export default interface ScriptEngineConfig {
    getAutoEnablePlugins(): boolean;
    getDebug(): boolean;
    getDebugger(): ScriptEngineDebuggerConfig;
    getExecuteCommandTemplate(): string;
    getExtractLibs(): boolean;
    getMainScriptFiles(): Array<string>;
    getRootScriptsFolder(): string;
    getScriptMimeType(): string;
    readConfigBoolean(path: string): boolean;
    readConfigBoolean(path: string, def: boolean): boolean;
    readConfigString(path: string): string;
    readConfigString(path: string, def: string): string;
    readConfigStringList(path: string): Array<string>;
    readConfigStringList(path: string, def: Array<any>): Array<string>;
}
export default class ScriptEngineConfig {
    static get $javaClass(): any;
    constructor(config: FileConfiguration);
    static readConfigBoolean$default(arg0: ScriptEngineConfig, arg1: string, arg2: boolean, arg3: number, arg4: any): boolean;
    static readConfigString$default(arg0: ScriptEngineConfig, arg1: string, arg2: string, arg3: number, arg4: any): string;
    static readConfigStringList$default(arg0: ScriptEngineConfig, arg1: string, arg2: Array<any>, arg3: number, arg4: any): Array<any>;
}
