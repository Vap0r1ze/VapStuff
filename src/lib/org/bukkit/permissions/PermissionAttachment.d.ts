import Permissible from './Permissible.js';
import Permission from './Permission.js';
import PermissionRemovedExecutor from './PermissionRemovedExecutor.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PermissionAttachment {
    getPermissible(): Permissible;
    getPermissions(): any;
    getPlugin(): Plugin;
    getRemovalCallback(): PermissionRemovedExecutor;
    remove(): boolean;
    setPermission(_name: string, value: boolean): void;
    setPermission(perm: Permission, value: boolean): void;
    setRemovalCallback(ex: PermissionRemovedExecutor): void;
    unsetPermission(perm: Permission): void;
    unsetPermission(_name: string): void;
}
export default class PermissionAttachment {
    static get $javaClass(): any;
    constructor(plugin: Plugin, permissible: Permissible);
}
