"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BanList$Type {
    static get $javaClass() {
        return Java.type('org.bukkit.BanList$Type');
    }
    static $isInstance(obj) {
        return obj instanceof BanList$Type.$javaClass;
    }
    static get IP() {
        return this.$javaClass.IP;
    }
    static get NAME() {
        return this.$javaClass.NAME;
    }
}
exports.default = BanList$Type;
