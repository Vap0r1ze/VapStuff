"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemFrame {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ItemFrame');
    }
    static $isInstance(obj) {
        return obj instanceof ItemFrame.$javaClass;
    }
}
exports.default = ItemFrame;
