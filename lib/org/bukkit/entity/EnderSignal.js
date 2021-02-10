"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderSignal {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderSignal');
    }
    static $isInstance(obj) {
        return obj instanceof EnderSignal.$javaClass;
    }
}
exports.default = EnderSignal;
