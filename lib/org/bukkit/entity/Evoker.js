"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Evoker {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Evoker');
    }
    static $isInstance(obj) {
        return obj instanceof Evoker.$javaClass;
    }
}
exports.default = Evoker;
