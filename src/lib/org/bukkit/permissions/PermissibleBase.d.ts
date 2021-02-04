import Permissible from './Permissible.js';
import Permission from './Permission.js';
import PermissionAttachment from './PermissionAttachment.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import ServerOperator from './ServerOperator.js';
export default interface PermissibleBase extends Permissible {
    addAttachment(plugin: Plugin): PermissionAttachment;
    addAttachment(plugin: Plugin, ticks: number): PermissionAttachment;
    addAttachment(plugin: Plugin, _name: string, value: boolean): PermissionAttachment;
    addAttachment(plugin: Plugin, _name: string, value: boolean, ticks: number): PermissionAttachment;
    clearPermissions(): void;
    getEffectivePermissions(): any;
    hasPermission(perm: Permission): boolean;
    hasPermission(inName: string): boolean;
    isOp(): boolean;
    isPermissionSet(perm: Permission): boolean;
    isPermissionSet(_name: string): boolean;
    recalculatePermissions(): void;
    removeAttachment(attachment: PermissionAttachment): void;
    setOp(value: boolean): void;
}
export default class PermissibleBase {
    static get $javaClass(): any;
    constructor(opable: ServerOperator);
}
