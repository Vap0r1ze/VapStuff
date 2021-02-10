"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersistentDataAdapterContext {
    static get $javaClass() {
        return Java.type('org.bukkit.persistence.PersistentDataAdapterContext');
    }
    static $isInstance(obj) {
        return obj instanceof PersistentDataAdapterContext.$javaClass;
    }
}
exports.default = PersistentDataAdapterContext;
