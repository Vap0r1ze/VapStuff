"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FixedMetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.FixedMetadataValue');
    }
    static $isInstance(obj) {
        return obj instanceof FixedMetadataValue.$javaClass;
    }
    constructor(...args) {
        return new FixedMetadataValue.$javaClass(...args);
    }
}
exports.default = FixedMetadataValue;
