import Plugin from './plugin/Plugin.js';
export default interface NamespacedKey {
    getKey(): string;
    getNamespace(): string;
}
export default class NamespacedKey {
    static get $javaClass(): any;
    constructor(plugin: Plugin, key: string);
    constructor(namespace: string, key: string);
    static get BUKKIT(): string;
    static get MINECRAFT(): string;
    static minecraft(key: string): NamespacedKey;
    static randomKey(): NamespacedKey;
}
