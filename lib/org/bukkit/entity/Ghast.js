"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ghast {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ghast');
    }
    static $isInstance(obj) {
        return obj instanceof Ghast.$javaClass;
    }
}
exports.default = Ghast;
