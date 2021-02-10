"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parrot {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Parrot');
    }
    static $isInstance(obj) {
        return obj instanceof Parrot.$javaClass;
    }
}
exports.default = Parrot;
