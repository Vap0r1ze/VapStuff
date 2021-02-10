"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataValue');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataValue.$javaClass;
    }
}
exports.default = MetadataValue;
