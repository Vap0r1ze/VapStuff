"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetadataStoreBase {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataStoreBase');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataStoreBase.$javaClass;
    }
    constructor(...args) {
        return new MetadataStoreBase.$javaClass(...args);
    }
}
exports.default = MetadataStoreBase;
