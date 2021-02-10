"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Merchant {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.Merchant');
    }
    static $isInstance(obj) {
        return obj instanceof Merchant.$javaClass;
    }
}
exports.default = Merchant;
