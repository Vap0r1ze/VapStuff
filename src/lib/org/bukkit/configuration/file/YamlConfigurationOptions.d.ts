import Configuration from '../../../../org/bukkit/configuration/Configuration.js';
import ConfigurationOptions from '../../../../org/bukkit/configuration/ConfigurationOptions.js';
import FileConfiguration from './FileConfiguration.js';
import FileConfigurationOptions from './FileConfigurationOptions.js';
import MemoryConfiguration from '../../../../org/bukkit/configuration/MemoryConfiguration.js';
import MemoryConfigurationOptions from '../../../../org/bukkit/configuration/MemoryConfigurationOptions.js';
import YamlConfiguration from './YamlConfiguration.js';
export default interface YamlConfigurationOptions extends FileConfigurationOptions {
    configuration(): YamlConfiguration;
    configuration(): Configuration;
    configuration(): MemoryConfiguration;
    configuration(): FileConfiguration;
    copyDefaults(): boolean;
    copyDefaults(value: boolean): FileConfigurationOptions;
    copyDefaults(value: boolean): MemoryConfigurationOptions;
    copyDefaults(value: boolean): ConfigurationOptions;
    copyDefaults(value: boolean): YamlConfigurationOptions;
    copyHeader(): boolean;
    copyHeader(value: boolean): YamlConfigurationOptions;
    copyHeader(value: boolean): FileConfigurationOptions;
    header(): string;
    header(value: string): YamlConfigurationOptions;
    header(value: string): FileConfigurationOptions;
    indent(): number;
    indent(value: number): YamlConfigurationOptions;
    pathSeparator(): string;
    pathSeparator(value: string): MemoryConfigurationOptions;
    pathSeparator(value: string): ConfigurationOptions;
    pathSeparator(value: string): FileConfigurationOptions;
    pathSeparator(value: string): YamlConfigurationOptions;
}
export default class YamlConfigurationOptions {
    static get $javaClass(): any;
}
