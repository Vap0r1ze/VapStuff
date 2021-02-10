"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalTamer {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AnimalTamer');
    }
    static $isInstance(obj) {
        return obj instanceof AnimalTamer.$javaClass;
    }
}
exports.default = AnimalTamer;
