export default interface SerializablePermission {
    checkGuard(arg0: any): void;
    getActions(): string;
    getName(): string;
    implies(arg0: any): boolean;
    newPermissionCollection(): any;
}
export default class SerializablePermission {
    static get $javaClass(): any;
    constructor(arg0: string);
    constructor(arg0: string, arg1: string);
}
