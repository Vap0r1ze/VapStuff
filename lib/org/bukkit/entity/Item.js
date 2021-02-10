"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Item');
    }
    static $isInstance(obj) {
        return obj instanceof Item.$javaClass;
    }
}
exports.default = Item;
