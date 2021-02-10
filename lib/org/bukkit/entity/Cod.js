"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cod {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Cod');
    }
    static $isInstance(obj) {
        return obj instanceof Cod.$javaClass;
    }
}
exports.default = Cod;
