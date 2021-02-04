import GroupPrincipal from './GroupPrincipal.js';
import UserPrincipal from './UserPrincipal.js';
export default interface UserPrincipalLookupService {
    lookupPrincipalByGroupName(arg0: string): GroupPrincipal;
    lookupPrincipalByName(arg0: string): UserPrincipal;
}
export default class UserPrincipalLookupService {
    static get $javaClass(): any;
}
