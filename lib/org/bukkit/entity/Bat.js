"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bat {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Bat');
    }
    static $isInstance(obj) {
        return obj instanceof Bat.$javaClass;
    }
}
exports.default = Bat;
