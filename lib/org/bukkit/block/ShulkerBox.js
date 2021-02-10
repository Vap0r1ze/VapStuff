"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShulkerBox {
    static get $javaClass() {
        return Java.type('org.bukkit.block.ShulkerBox');
    }
    static $isInstance(obj) {
        return obj instanceof ShulkerBox.$javaClass;
    }
}
exports.default = ShulkerBox;
