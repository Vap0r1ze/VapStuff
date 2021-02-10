"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockDataMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BlockDataMeta');
    }
    static $isInstance(obj) {
        return obj instanceof BlockDataMeta.$javaClass;
    }
}
exports.default = BlockDataMeta;
