"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Advancement {
    static get $javaClass() {
        return Java.type('org.bukkit.advancement.Advancement');
    }
    static $isInstance(obj) {
        return obj instanceof Advancement.$javaClass;
    }
}
exports.default = Advancement;
