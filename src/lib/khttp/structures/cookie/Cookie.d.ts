export default interface Cookie {
    component1(): string;
    component2(): any;
    component3(): any;
    copy(key: string, value: any, attributes: any): Cookie;
    getAttributes(): any;
    getKey(): string;
    getValue(): any;
    getValueWithAttributes(): string;
}
export default class Cookie {
    static get $javaClass(): any;
    constructor(cookie: Cookie);
    constructor(string: string);
    constructor(key: string, value: any, attributes: any);
    constructor(arg0: string, arg1: any, arg2: any, arg3: number, arg4: any);
    static copy$default(arg0: Cookie, arg1: string, arg2: any, arg3: any, arg4: number, arg5: any): Cookie;
}
