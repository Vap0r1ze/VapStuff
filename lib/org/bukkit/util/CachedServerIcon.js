"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CachedServerIcon {
    static get $javaClass() {
        return Java.type('org.bukkit.util.CachedServerIcon');
    }
    static $isInstance(obj) {
        return obj instanceof CachedServerIcon.$javaClass;
    }
}
exports.default = CachedServerIcon;
