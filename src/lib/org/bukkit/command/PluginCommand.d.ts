import Command from './Command.js';
import CommandExecutor from './CommandExecutor.js';
import CommandMap from './CommandMap.js';
import CommandSender from './CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import PluginIdentifiableCommand from './PluginIdentifiableCommand.js';
import TabCompleter from './TabCompleter.js';
export default interface PluginCommand extends Command, PluginIdentifiableCommand {
    execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
    getAliases(): Array<string>;
    getDescription(): string;
    getExecutor(): CommandExecutor;
    getLabel(): string;
    getName(): string;
    getPermission(): string;
    getPermissionMessage(): string;
    getPlugin(): Plugin;
    getTabCompleter(): TabCompleter;
    getUsage(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setAliases(aliases: Array<any>): Command;
    setDescription(description: string): Command;
    setExecutor(executor: CommandExecutor): void;
    setLabel(_name: string): boolean;
    setName(_name: string): boolean;
    setPermission(permission: string): void;
    setPermissionMessage(permissionMessage: string): Command;
    setTabCompleter(completer: TabCompleter): void;
    setUsage(usage: string): Command;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    testPermission(target: CommandSender): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    unregister(commandMap: CommandMap): boolean;
}
export default class PluginCommand {
    static get $javaClass(): any;
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}
