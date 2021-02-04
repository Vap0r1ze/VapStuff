import LazyMetadataValue$CacheStrategy from './LazyMetadataValue$CacheStrategy.js';
import MetadataValueAdapter from './MetadataValueAdapter.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface LazyMetadataValue extends MetadataValueAdapter {
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asShort(): number;
    asString(): string;
    getOwningPlugin(): Plugin;
    invalidate(): void;
    value(): any;
}
export default class LazyMetadataValue {
    static get $javaClass(): any;
    constructor(owningPlugin: Plugin, lazyValue: any);
    constructor(owningPlugin: Plugin, cacheStrategy: LazyMetadataValue$CacheStrategy, lazyValue: any);
}
