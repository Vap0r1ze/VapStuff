"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bee {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Bee');
    }
    static $isInstance(obj) {
        return obj instanceof Bee.$javaClass;
    }
}
exports.default = Bee;
