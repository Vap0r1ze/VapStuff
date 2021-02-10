"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BookMeta');
    }
    static $isInstance(obj) {
        return obj instanceof BookMeta.$javaClass;
    }
}
exports.default = BookMeta;
