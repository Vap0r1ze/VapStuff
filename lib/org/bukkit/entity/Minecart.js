"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Minecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Minecart');
    }
    static $isInstance(obj) {
        return obj instanceof Minecart.$javaClass;
    }
}
exports.default = Minecart;
