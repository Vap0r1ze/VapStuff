"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetadataStore {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataStore');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataStore.$javaClass;
    }
}
exports.default = MetadataStore;
