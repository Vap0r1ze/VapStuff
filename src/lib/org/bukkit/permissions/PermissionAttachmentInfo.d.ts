import Permissible from './Permissible.js';
import PermissionAttachment from './PermissionAttachment.js';
export default interface PermissionAttachmentInfo {
    getAttachment(): PermissionAttachment;
    getPermissible(): Permissible;
    getPermission(): string;
    getValue(): boolean;
}
export default class PermissionAttachmentInfo {
    static get $javaClass(): any;
    constructor(permissible: Permissible, permission: string, attachment: PermissionAttachment, value: boolean);
}
