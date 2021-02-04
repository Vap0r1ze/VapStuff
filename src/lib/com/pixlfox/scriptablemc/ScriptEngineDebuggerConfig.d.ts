import ScriptEngineConfig from './ScriptEngineConfig.js';
export default interface ScriptEngineDebuggerConfig {
    getAddress(): string;
    getEnabled(): boolean;
    getWaitAttached(): boolean;
}
export default class ScriptEngineDebuggerConfig {
    static get $javaClass(): any;
    constructor(config: ScriptEngineConfig);
}
