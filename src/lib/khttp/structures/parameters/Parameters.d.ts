export default interface Parameters {
    clear(): void;
    compute(arg0: string, arg1: any): string;
    compute(arg0: any, arg1: any): any;
    computeIfAbsent(arg0: any, arg1: any): any;
    computeIfAbsent(arg0: string, arg1: any): string;
    computeIfPresent(arg0: string, arg1: any): string;
    computeIfPresent(arg0: any, arg1: any): any;
    containsKey(key: string): boolean;
    containsKey(arg0: any): boolean;
    containsValue(arg0: any): boolean;
    containsValue(value: string): boolean;
    entrySet(): any;
    forEach(arg0: any): void;
    get(key: string): string;
    get(arg0: any): any;
    getEntries(): any;
    getKeys(): any;
    getOrDefault(arg0: any, arg1: any): any;
    getParameters(): Array<any>;
    getSize(): number;
    getValues(): Array<string>;
    isEmpty(): boolean;
    keySet(): any;
    merge(arg0: string, arg1: string, arg2: any): string;
    merge(arg0: any, arg1: any, arg2: any): any;
    put(arg0: any, arg1: any): any;
    put(arg0: string, arg1: string): string;
    putAll(arg0: any): void;
    putIfAbsent(arg0: any, arg1: any): any;
    putIfAbsent(arg0: string, arg1: string): string;
    remove(arg0: any): any;
    remove(arg0: any, arg1: any): boolean;
    replace(arg0: any, arg1: any): any;
    replace(arg0: string, arg1: string): string;
    replace(arg0: any, arg1: any, arg2: any): boolean;
    replace(arg0: string, arg1: string, arg2: string): boolean;
    replaceAll(arg0: any): void;
    size(): number;
    values(): Array<string>;
}
export default class Parameters {
    static get $javaClass(): any;
    constructor(parameters: any);
    constructor(parameters: Array<any>);
}
