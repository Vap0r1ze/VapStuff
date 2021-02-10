"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PersistentDataContainer {
    static get $javaClass() {
        return Java.type('org.bukkit.persistence.PersistentDataContainer');
    }
    static $isInstance(obj) {
        return obj instanceof PersistentDataContainer.$javaClass;
    }
}
exports.default = PersistentDataContainer;
