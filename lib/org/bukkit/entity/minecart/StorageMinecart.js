"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.StorageMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof StorageMinecart.$javaClass;
    }
}
exports.default = StorageMinecart;
