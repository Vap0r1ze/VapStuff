"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BanList {
    static get $javaClass() {
        return Java.type('org.bukkit.BanList');
    }
    static $isInstance(obj) {
        return obj instanceof BanList.$javaClass;
    }
}
exports.default = BanList;