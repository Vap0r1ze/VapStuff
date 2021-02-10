"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Enderman {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Enderman');
    }
    static $isInstance(obj) {
        return obj instanceof Enderman.$javaClass;
    }
}
exports.default = Enderman;
