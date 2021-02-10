"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Creeper {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Creeper');
    }
    static $isInstance(obj) {
        return obj instanceof Creeper.$javaClass;
    }
}
exports.default = Creeper;
