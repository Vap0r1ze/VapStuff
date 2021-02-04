import MetadataValue from './MetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataStoreBase {
    getMetadata(subject: any, metadataKey: string): Array<MetadataValue>;
    hasMetadata(subject: any, metadataKey: string): boolean;
    invalidateAll(owningPlugin: Plugin): void;
    removeMetadata(subject: any, metadataKey: string, owningPlugin: Plugin): void;
    setMetadata(subject: any, metadataKey: string, newMetadataValue: MetadataValue): void;
}
export default class MetadataStoreBase {
    static get $javaClass(): any;
    constructor();
}
