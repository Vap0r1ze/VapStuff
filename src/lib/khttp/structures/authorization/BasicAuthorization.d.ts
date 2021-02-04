import Authorization from './Authorization.js';
export default interface BasicAuthorization extends Authorization {
    component1(): string;
    component2(): string;
    copy(user: string, password: string): BasicAuthorization;
    getHeader(): any;
    getPassword(): string;
    getUser(): string;
}
export default class BasicAuthorization {
    static get $javaClass(): any;
    constructor(user: string, password: string);
    static copy$default(arg0: BasicAuthorization, arg1: string, arg2: string, arg3: number, arg4: any): BasicAuthorization;
}
