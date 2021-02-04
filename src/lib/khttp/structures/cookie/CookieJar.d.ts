import Cookie from './Cookie.js';
export default interface CookieJar {
    clear(): void;
    compute(arg0: any, arg1: any): any;
    computeIfAbsent(arg0: any, arg1: any): any;
    computeIfPresent(arg0: any, arg1: any): any;
    containsKey(key: string): boolean;
    containsKey(arg0: any): boolean;
    containsValue(arg0: any): boolean;
    containsValue(value: string): boolean;
    entrySet(): any;
    forEach(arg0: any): void;
    get(key: string): string;
    get(arg0: any): any;
    getCookie(key: string): Cookie;
    getCookies(): Array<Cookie>;
    getEntries(): any;
    getKeys(): any;
    getOrDefault(arg0: any, arg1: any): any;
    getSize(): number;
    getValues(): Array<string>;
    isEmpty(): boolean;
    keySet(): any;
    merge(arg0: any, arg1: any, arg2: any): any;
    put(arg0: any, arg1: any): any;
    put(key: string, value: string): string;
    putAll(from: any): void;
    putIfAbsent(arg0: any, arg1: any): any;
    remove(key: string): string;
    remove(arg0: any): any;
    remove(arg0: any, arg1: any): boolean;
    replace(arg0: any, arg1: any): any;
    replace(arg0: any, arg1: any, arg2: any): boolean;
    replaceAll(arg0: any): void;
    setCookie(cookie: Cookie): void;
    size(): number;
    values(): Array<string>;
}
export default class CookieJar {
    static get $javaClass(): any;
    constructor();
    constructor(cookies: any);
    constructor(cookies: Array<Cookie>);
    constructor(arg0: Array<Cookie>, arg1: number, arg2: any);
}
