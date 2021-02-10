"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LazyMetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.LazyMetadataValue');
    }
    static $isInstance(obj) {
        return obj instanceof LazyMetadataValue.$javaClass;
    }
    constructor(...args) {
        return new LazyMetadataValue.$javaClass(...args);
    }
}
exports.default = LazyMetadataValue;
