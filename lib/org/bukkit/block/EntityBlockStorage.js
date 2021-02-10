"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityBlockStorage {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EntityBlockStorage');
    }
    static $isInstance(obj) {
        return obj instanceof EntityBlockStorage.$javaClass;
    }
}
exports.default = EntityBlockStorage;
