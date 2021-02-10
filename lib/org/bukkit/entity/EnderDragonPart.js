"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderDragonPart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderDragonPart');
    }
    static $isInstance(obj) {
        return obj instanceof EnderDragonPart.$javaClass;
    }
}
exports.default = EnderDragonPart;
