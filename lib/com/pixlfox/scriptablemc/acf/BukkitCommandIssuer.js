"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitCommandIssuer {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandIssuer');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitCommandIssuer.$javaClass;
    }
}
exports.default = BukkitCommandIssuer;
