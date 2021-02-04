export default interface PluginLoadOrder {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    name(): string;
    ordinal(): number;
}
export default class PluginLoadOrder {
    static get $javaClass(): any;
    static get POSTWORLD(): PluginLoadOrder;
    static get STARTUP(): PluginLoadOrder;
}
