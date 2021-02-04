import Configuration from './Configuration.js';
export default interface ConfigurationOptions {
    configuration(): Configuration;
    copyDefaults(): boolean;
    copyDefaults(value: boolean): ConfigurationOptions;
    pathSeparator(): string;
    pathSeparator(value: string): ConfigurationOptions;
}
export default class ConfigurationOptions {
    static get $javaClass(): any;
}
