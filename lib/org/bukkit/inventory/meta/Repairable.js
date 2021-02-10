"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repairable {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.Repairable');
    }
    static $isInstance(obj) {
        return obj instanceof Repairable.$javaClass;
    }
}
exports.default = Repairable;
