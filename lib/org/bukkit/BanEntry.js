"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BanEntry {
    static get $javaClass() {
        return Java.type('org.bukkit.BanEntry');
    }
    static $isInstance(obj) {
        return obj instanceof BanEntry.$javaClass;
    }
}
exports.default = BanEntry;
