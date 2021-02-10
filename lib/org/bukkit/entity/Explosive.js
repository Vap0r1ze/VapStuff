"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Explosive {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Explosive');
    }
    static $isInstance(obj) {
        return obj instanceof Explosive.$javaClass;
    }
}
exports.default = Explosive;
