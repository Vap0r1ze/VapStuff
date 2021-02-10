"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersistentDataHolder {
    static get $javaClass() {
        return Java.type('org.bukkit.persistence.PersistentDataHolder');
    }
    static $isInstance(obj) {
        return obj instanceof PersistentDataHolder.$javaClass;
    }
}
exports.default = PersistentDataHolder;
