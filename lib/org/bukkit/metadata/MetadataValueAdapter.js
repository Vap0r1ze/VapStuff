"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetadataValueAdapter {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataValueAdapter');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataValueAdapter.$javaClass;
    }
}
exports.default = MetadataValueAdapter;
