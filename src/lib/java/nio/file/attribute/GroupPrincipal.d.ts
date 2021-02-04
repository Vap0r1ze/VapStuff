import UserPrincipal from './UserPrincipal.js';
export default interface GroupPrincipal extends UserPrincipal {
    getName(): string;
    implies(arg0: any): boolean;
}
export default class GroupPrincipal {
    static get $javaClass(): any;
}
