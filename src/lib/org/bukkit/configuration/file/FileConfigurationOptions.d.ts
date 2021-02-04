import Configuration from '../../../../org/bukkit/configuration/Configuration.js';
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import FileConfiguration from './FileConfiguration.js';
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
export default interface FileConfigurationOptions extends MemoryConfigurationOptions {
    configuration(): MemoryConfiguration;
    configuration(): FileConfiguration;
    configuration(): Configuration;
    copyDefaults(): boolean;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): FileConfigurationOptions;
    copyHeader(): boolean;
    copyHeader(value: boolean): FileConfigurationOptions;
    header(): string;
    header(value: string): FileConfigurationOptions;
    pathSeparator(): string;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): MemoryConfigurationOptions;
    pathSeparator(value: string): FileConfigurationOptions;
}
export default class FileConfigurationOptions {
    static get $javaClass(): any;
}
