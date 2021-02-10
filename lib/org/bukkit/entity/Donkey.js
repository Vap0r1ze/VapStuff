"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Donkey {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Donkey');
    }
    static $isInstance(obj) {
        return obj instanceof Donkey.$javaClass;
    }
}
exports.default = Donkey;
