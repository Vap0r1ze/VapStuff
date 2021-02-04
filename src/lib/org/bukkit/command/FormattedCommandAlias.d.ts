import Command from './Command.js';
import CommandMap from './CommandMap.js';
import CommandSender from './CommandSender.js';
import Location from '../../../org/bukkit/Location.js';
export default interface FormattedCommandAlias extends Command {
    execute(sender: CommandSender, commandLabel: string, args: Array<string>): boolean;
    getAliases(): Array<string>;
    getDescription(): string;
    getLabel(): string;
    getName(): string;
    getPermission(): string;
    getPermissionMessage(): string;
    getUsage(): string;
    isRegistered(): boolean;
    register(commandMap: CommandMap): boolean;
    setAliases(aliases: Array<any>): Command;
    setDescription(description: string): Command;
    setLabel(_name: string): boolean;
    setName(_name: string): boolean;
    setPermission(permission: string): void;
    setPermissionMessage(permissionMessage: string): Command;
    setUsage(usage: string): Command;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>): Array<string>;
    tabComplete(sender: CommandSender, alias: string, args: Array<string>, location: Location): Array<string>;
    testPermission(target: CommandSender): boolean;
    testPermissionSilent(target: CommandSender): boolean;
    unregister(commandMap: CommandMap): boolean;
}
export default class FormattedCommandAlias {
    static get $javaClass(): any;
    constructor(alias: string, formatStrings: Array<string>);
    static broadcastCommandMessage(source: CommandSender, message: string): void;
    static broadcastCommandMessage(source: CommandSender, message: string, sendToSource: boolean): void;
}