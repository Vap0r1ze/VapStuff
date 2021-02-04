export default interface UserPrincipal {
    getName(): string;
    implies(arg0: any): boolean;
}
export default class UserPrincipal {
    static get $javaClass(): any;
}
