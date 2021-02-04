import LazyMetadataValue from './LazyMetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface FixedMetadataValue extends LazyMetadataValue {
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
export default class FixedMetadataValue {
    static get $javaClass(): any;
    constructor(owningPlugin: Plugin, value: any);
}
